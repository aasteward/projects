window.addEventListener("load", function() {

	// SCRIPT TO POST COORDS OF CLICK

	// function point_it(event){
	// 	pos_x = event.offsetX?(event.offsetX):event.pageX-document.getElementById("pointer_div").offsetLeft;
	// 	pos_y = event.offsetY?(event.offsetY):event.pageY-document.getElementById("pointer_div").offsetTop;
	// 	document.getElementById("cross").style.left = (pos_x-1) ;
	// 	document.getElementById("cross").style.top = (pos_y-15) ;
	// 	document.getElementById("cross").style.visibility = "visible" ;
	// 	document.pointform.form_x.value = pos_x;
	// 	document.pointform.form_y.value = pos_y;
	// }

	// window.addEventListener("click", function(e) {
	// 	console.log(e.offsetX)
	// 	console.log(e.offsetY)
	// });


	// SIZE OF WALDIV topleft @  510, 530 to bottomright 540, 590

	window.addEventListener("click", waldo);

	function waldo(e) {
		if (e.offsetX >= 510 && e.offsetX <= 540 && e.offsetY >= 530 && e.offsetY <= 590) {
			viewModal();
		}
	}


	function viewModal(){
    	// REVEALS WIN MODAL
    	document.getElementsByClassName("modal")[0].style.display = "block";
    }

    // ADDS TRIGGER TO MODAL 'X'
    var bigX = document.getElementsByClassName("modal__close")[0];
    bigX.addEventListener("click", closeModal);

    function closeModal(){
    	// CLOSES MODAL WINDOW WHEN 'X' IS CLICKED
    	document.getElementsByClassName("modal")[0].style.display = "none";
    }

    // ADDS TRIGGER TO MODAL BACKGROUND
	var modalBG = document.getElementsByClassName("modal")[0];
	modalBG.addEventListener("click", ignoreModal);

    function ignoreModal(e){
    	// CLOSES MODAL WINDOWN WHEN BACKGROUND IS CLICKED
    	if (e.target == this) {
    		document.getElementsByClassName("modal")[0].style.display = "none";
    	}
    }

});