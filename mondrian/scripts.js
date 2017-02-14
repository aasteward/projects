window.addEventListener("load", function() {

	// SET BRUSH COLOR TRIGGER
	var palette = document.getElementById("color_palette")
	palette.addEventListener("click", brushColor)

	// SET BOX COLOR TRIGGER
	var easel = document.getElementById("painting")
	easel.addEventListener("click", boxColor)

});

// CHANGE BRUSH COLOR
var current_color = "white"
function brushColor(){
	if (event.target == document.getElementById("red")) {
		current_color = "#cc0000"
	} else if (event.target == document.getElementById("yellow")) {
		current_color = "#ffec00"
	} else if (event.target == document.getElementById("blue")) {
		current_color = "#0000cc"
	} else if (event.target == document.getElementById("white")) {
		current_color = "white"
	}
}

// CHANGE BOX COLOR
function boxColor(){
	event.target.style.background = current_color
}