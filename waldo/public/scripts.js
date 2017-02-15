window.addEventListener("load", function() {

	window.addEventListener("click", pictureClicked);

    // ADDS TRIGGER TO MODAL 'X' AND FUNCTION TO CLOSE MODAL WHEN 'X' IS CLICKED
    var bigX = document.getElementsByClassName("modal__close")[0];
    bigX.addEventListener("click", closeModal);
    function closeModal(){
    	document.getElementsByClassName("modal")[0].style.display = "none";
    }

    // ADDS TRIGGER TO MODAL BACKGROUND AND FUNCTION TO CLOSE MODAL WHEN BAKCGROUND IS CLICKED
	var modalBG = document.getElementsByClassName("modal")[0];
	modalBG.addEventListener("click", ignoreModal);
    function ignoreModal(e){
    	if (e.target == this) {
    		document.getElementsByClassName("modal")[0].style.display = "none";
    	}
    }

});

// 
function pictureClicked(e) {
	x = e.offsetX;
	y = e.offsetY;
	clickSpot();
}

//
function clickSpot() {
	var xhr = new XMLHttpRequest();
	var query = "x=" + x + "?y=" + y;
	xhr.open('GET', '/check?' + query);
	xhr.setRequestHeader("Content-type", "x-www-form-urlencoded");
	xhr.send();
}

//
var running_time = "";
function clock(){
	var time = 0.0;
	function count(t){

	}
}
clock();