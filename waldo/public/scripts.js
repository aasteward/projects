window.addEventListener("load", function() {
	window.addEventListener("click", pictureClicked);

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
});

// GETS CLOCK START TIME
var loadTime = new Date();
loadTime = loadTime.getTime();

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
	var query = "x=" + x + "&y=" + y + "&t=" + running_time;
	xhr.open('GET', '/check?' + query);
	xhr.setRequestHeader("Content-type", "x-www-form-urlencoded");
	xhr.send();
	xhr.addEventListener("load", victory);
}

// DISPLAYS MODAL WHEN WALDO IS FOUND
function victory(e){
	if (e.target.responseText == "true") {
		document.getElementsByClassName("modal")[0].style.display = "block";
		document.getElementsByClassName("modal__title")[0].innerText = "Good Job!";
		document.getElementsByClassName("modal__body")[0].innerText = "\nYou found Waldo in " + running_time + " seconds!\nPlease enter your name:";
		stopTime();
	// } else {
	// 	document.getElementsByClassName("modal")[0].style.display = "block";
	// 	document.getElementsByClassName("modal__title")[0].innerText = "Oops!";
	// 	document.getElementsByClassName("modal__body")[0].innerText = "Keep looking!";
	}
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

