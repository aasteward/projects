window.addEventListener("load", function() {

	// window.addEventListener("click", function(e) {
	// 	console.log(e.offsetX)
	// 	console.log(e.offsetY)
	// });

	window.addEventListener("click", waldo);

	// CHECKS IF USER CLICKED ON WALDO/WANDA AND REVEALS MODAL
	function waldo(e) {
		if (e.offsetX >= 510 && e.offsetX <= 540 && e.offsetY >= 530 && e.offsetY <= 590) {
			document.getElementsByClassName("modal")[0].style.display = "block";
	    	document.getElementsByClassName("modal__body")[0].innerText = "You found Waldo!";
		}
		else if (e.offsetX >= 520 && e.offsetX <= 540 && e.offsetY >= 435 && e.offsetY <= 455) {
			document.getElementsByClassName("modal")[0].style.display = "block";
	    	document.getElementsByClassName("modal__body")[0].innerText = "You found Wanda!";
		}
	}

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