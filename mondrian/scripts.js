window.addEventListener("load", function() {

	var easel = document.getElementById("workspace")
	easel.addEventListener("click", function(e) {
		console.log(event.target);
	});

	// SET BRUSH COLOR
	function pickColor(){
		if (event.target.class = "color") {
			console.log("You picked the color " + event.target.id)
		}
	}
});