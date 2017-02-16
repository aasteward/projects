window.addEventListener("load", function() {
	document.getElementById("pic").addEventListener("click", pictureClicked);

    // ADDS TRIGGER TO MODAL 'X' AND FUNCTION TO CLOSE MODAL WHEN 'X' IS CLICKED
    var bigX = document.getElementsByClassName("modal__close")[0];
    bigX.addEventListener("click", closeModal);
    function closeModal(){
    	document.getElementsByClassName("modal")[0].style.display = "none";
    }

    // ADDS TRIGGER TO MODAL BACKGROUND AND FUNCTION TO CLOSE MODAL WHEN BACKGROUND IS CLICKED
	var modalBG = document.getElementsByClassName("modal")[0];
	modalBG.addEventListener("click", ignoreModal);
    function ignoreModal(e){
    	if (e.target == this) {
    		document.getElementsByClassName("modal")[0].style.display = "none";
    	}
    }

    // ADDS TRIGGERS TO RESTART AND SCOREBOARD BUTTONS
    document.getElementById("restart").addEventListener("click", play_again);
    document.getElementById("score_list").addEventListener("click", highScores);;
});

// GETS CLOCK START TIME
var loadTime = new Date();
loadTime = loadTime.getTime();

// STARTS CLOCK AGAIN FOR ANOTHER GAME
function play_again(e){
	loadTime = new Date();
	loadTime = loadTime.getTime();
	e.preventDefault();
}

// GETS COORDINATES OF CLICK
var x = 0;
var y = 0;
function pictureClicked(e) {
	x = e.offsetX;
	y = e.offsetY;
	clickSpot();
}

// SENDS COORDINATES AS QUERY
function clickSpot() {
	var xhr = new XMLHttpRequest();
	var query = "x=" + x + "&y=" + y;
	xhr.open('GET', '/check?' + query);
	xhr.setRequestHeader("Content-type", "x-www-form-urlencoded");
	xhr.send();
	xhr.addEventListener("load", victory);
}

// DISPLAYS MODAL WHEN WALDO IS FOUND
var name = ""
function victory(e){
	if (e.target.responseText == "true") {
		document.getElementsByClassName("modal")[0].style.display = "block";
		document.getElementsByClassName("modal__content")[0].style.height = "120px";
		document.getElementsByClassName("modal__title")[0].innerText = "Good Job!";
		document.getElementsByClassName("modal__body")[0].innerText = "\nYou found Waldo in " + running_time + " seconds!\nPlease enter your name:";
		document.getElementsByClassName("username")[0].style.display = "block";
		document.getElementById("score_button").style.display = "block";
		document.getElementById("score_button").addEventListener("click", function(){
			name = document.getElementsByClassName("username")[0].value;
			submit(name, running_time);
			document.getElementsByClassName("modal")[0].style.display = "none";
			document.getElementsByClassName("username")[0].value = "";
		})
		stopTime();
	} else {
		document.getElementsByClassName("modal")[0].style.display = "block";
		document.getElementsByClassName("modal__content")[0].style.height = "60px";
		document.getElementsByClassName("modal__title")[0].innerText = "Oops!";
		document.getElementsByClassName("modal__body")[0].innerText = "\nKeep looking!";
		document.getElementsByClassName("username")[0].style.display = "none";
		document.getElementById("score_button").style.display = "none";
		setTimeout(resetModal, 1600);
		function resetModal() {
			document.getElementsByClassName("modal")[0].style.display = "none";
		}
	}
}

// SUBMITS USERNAME AND SCORE
function submit(name, time){
	var xhr = new XMLHttpRequest();
	var query = "t=" + running_time + "&n=" + name;
	xhr.open('GET', '/score?' + query);
	xhr.setRequestHeader("Content-type", "x-www-form-urlencoded");
	xhr.send();
}

// BUILDS AND STARTS CLOCK
var running_time = 0.0;
function timer(){
	var time = new Date();
	time = time.getTime();
	running_time = ((time - loadTime)/1000).toFixed(1);
	document.getElementById("seconds").innerHTML = "Your Time: " + running_time;
}
var clock = setInterval(timer, 100);

// STOPS CLOCK
function stopTime(){
	clearInterval(clock);
}

// DISPLAYS SCORES IN MODAL
function highScores(e){
	var scoreList = "";
	var xhr = new XMLHttpRequest();
	xhr.open('GET', '/board');
	// xhr.onload(function(){
	// 	scoreList = xhr.responseText;
	// })
	// xhr.send();
	// xhr.addEventListener("load", function(){
	// 	scoreList = xhr.responseText;
	// 	document.getElementsByClassName("modal")[0].style.display = "block";
	// 	document.getElementsByClassName("modal__content")[0].style.height = "260px";
	// 	document.getElementsByClassName("modal__title")[0].innerText = "Top Scores:";
	// 	document.getElementsByClassName("modal__body")[0].innerText = scoreList;
	// 	document.getElementsByClassName("username")[0].style.display = "none";
	// 	document.getElementById("score_button").style.display = "none";
	// })
	var scoreList = xhr.responseText;
	document.getElementsByClassName("modal")[0].style.display = "block";
	document.getElementsByClassName("modal__content")[0].style.height = "260px";
	document.getElementsByClassName("modal__title")[0].innerText = "Top Scores:";
	document.getElementsByClassName("modal__body")[0].innerText = scoreList;
	document.getElementsByClassName("username")[0].style.display = "none";
	document.getElementById("score_button").style.display = "none";
	e.preventDefault();
}

// function scoreDisplay(e){
// 	var scoreList = e.target.responseText;
// 	document.getElementsByClassName("modal")[0].style.display = "block";
// 	document.getElementsByClassName("modal__content")[0].style.height = "260px";
// 	document.getElementsByClassName("modal__title")[0].innerText = "Top Scores:";
// 	document.getElementsByClassName("modal__body")[0].innerText = scoreList;
// 	document.getElementsByClassName("username")[0].style.display = "none";
// 	document.getElementById("score_button").style.display = "none";
// }
