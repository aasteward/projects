window.addEventListener("load", function() {

	// SET BRUSH COLOR TRIGGER
	var palette = document.getElementById("color_palette");
	palette.addEventListener("click", brushColor);

	// SET BOX COLOR TRIGGER
	var easel = document.getElementById("painting");
	easel.addEventListener("click", boxColor);

	// SET SAVE BUTTON TRIGGER
	var save = document.getElementById("save_button");
	save.addEventListener("click", gatherPainting);

});

// CHANGE BRUSH COLOR
var current_color = "white";
function brushColor(){
	if (event.target == document.getElementById("red")) {
		current_color = "#cc0000";
	} else if (event.target == document.getElementById("yellow")) {
		current_color = "#ffec00";
	} else if (event.target == document.getElementById("blue")) {
		current_color = "#0000cc";
	} else if (event.target == document.getElementById("white")) {
		current_color = "white";
	}
}

// CHANGE BOX COLOR
function boxColor(){
	event.target.style.background = current_color;
}

// GATHERS PAINTING INFO FOR SAVE
var squares = document.getElementsByClassName("row");
var box_color = "";
var color_list = [];
function gatherPainting(e){
	color_list = [];
	e.preventDefault();
	for (i = 0; i < squares.length; i++){
		box_color = (squares[i].style.background);
		if (squares[i].style.background == ""){
			box_color = "white";
		}
		color_list.push(box_color);
	}
	color_list = color_list.join();
	storePainting();
}

// SENDS PAINTING INFO TO SAVE
function storePainting(){
	xhr = new XMLHttpRequest();
	xhr.open("GET", "http://localhost:4567/save?color_list=" + color_list);
	xhr.send();
	// color_list = [];
}