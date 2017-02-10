window.addEventListener("load", function(){

	var host = document.getElementsByClassName("sample")[0]
	// host.style.display = "none";

	// PREPARES VARIABLES FOR TRIGGER LOOPS
	var likes = document.getElementsByClassName("action--like");
	var unlikes = document.getElementsByClassName("action--unlike");
	var replies = document.getElementsByClassName("action--reply");
	var commenter = document.getElementsByClassName("action--comment")[0];
	var posts = document.getElementsByClassName("button");
	var sharer = document.getElementsByClassName("action--share")[0];
	var viewer = document.getElementsByClassName("profile");
	var bigX = document.getElementsByClassName("modal__close")[0];
	var modalBG = document.getElementsByClassName("modal")[0];

	// SETS INDIVIDUAL TRIGGERS AND HIDES FIRST 'UNLIKE' ANCHOR
	likes[0].addEventListener("click", plike);
	unlikes[0].addEventListener("click", punlike);
	commenter.addEventListener("click", comment);
	sharer.addEventListener("click", sharePost);
	bigX.addEventListener("click", closeModal);
	modalBG.addEventListener("click", ignoreModal);
	unlikes[0].style.display = "none";

	// CREATES EVENT TRIGGERS ON 'LIKE' AND 'UNLIKE' ANCHORS, AND HIDES 'UNLIKE' ANCHORS
	for (var i = 1; i < unlikes.length; i++){
		unlikes[i].style.display = "none";
		likes[i].addEventListener("click", like);
		unlikes[i].addEventListener("click", unlike);
	}

	// CREATES EVENT TRIGGERS ON 'REPLY' ANCHORS
	for (var i = 0; i < replies.length; i++){
		replies[i].addEventListener("click", showReplies);
	}

	// CREATES EVENT TRIGGERS ON 'SUBMIT' BUTTONS
	for (var i = 0; i < posts.length; i++){
		posts[i].addEventListener("click", postComment);
	}

	// CREATES EVENT TRIGGERS ON PROFILE NAMES
	for (var i = 0; i < viewer.length; i++){
		viewer[i].addEventListener("click", viewProfile);
	}

	function plike(){
		// UPDATES LIKE COUNT FOR PARENT COMMENT
		this.style.display = "none";
		this.nextElementSibling.style.display = "inline-block";
		var count = this.parentElement.parentElement.parentElement.getElementsByClassName("like_count")[0].innerText;
		count = count.split(" ");
		count[0] = parseInt(count[0]) + 1;
		count = count.join(" ");
		this.parentElement.parentElement.parentElement.getElementsByClassName("like_count")[0].innerText = count;
	}

	function punlike(){
		// UPDATES LIKE COUNT FOR PARENT COMMENT
		this.style.display = "none";
		this.previousElementSibling.style.display = "inline-block";
		var count = this.parentElement.parentElement.parentElement.getElementsByClassName("like_count")[0].innerText;
		count = count.split(" ");
		count[0] = parseInt(count[0]) - 1;
		count = count.join(" ");
		this.parentElement.parentElement.parentElement.getElementsByClassName("like_count")[0].innerText = count;
	}

	function like(){
		// HIDES 'LIKE' ANCHOR
		this.style.display = "none";
		// REVEALS SIBLING 'UNLIKE' ANCHOR
		this.nextElementSibling.style.display = "inline-block";
		var count = this.parentElement.getElementsByClassName('like_count')[0].innerText;
		// INCREMENTS SIBLING 'LIKE_COUNT' SPAN
		count = count.split(" ");
		count[0] = parseInt(count[0]) + 1;
		count = count.join(" ");
		this.parentElement.getElementsByClassName('like_count')[0].innerText = count;
	}

	function unlike(){
		// HIDES 'UNLIKE' ANCHOR
		this.style.display = "none";
		// REVEALS SIBLING 'LIKE' ANCHOR
		this.previousElementSibling.style.display = "inline-block";
		var count = this.parentElement.getElementsByClassName('like_count')[0].innerText;
		// DECREMENTS SIBLING 'LIKE_COUNT' SPAN
		count = count.split(" ");
		count[0] = parseInt(count[0]) - 1;
		count = count.join(" ");
		this.parentElement.getElementsByClassName('like_count')[0].innerText = count;
	}

	function comment(){
		// WHEN 'COMMENT' IS CLICKED, FOCUSES CURSOR IN TEXT BOX.
		document.getElementsByClassName("commentbox")[0].focus();
	}

	function showReplies(){
		// WHEN 'REPLY' IS CLICKED, SHOULD SHOW/HIDE REPLY THREAD.
		var reply_area = this.parentElement.parentElement.getElementsByClassName('replies')[0]
		if (reply_area.style.display == "none"){
			reply_area.style.display = "block";
		}
		else {
			reply_area.style.display = "none";
		}
	}

    function postComment(){
    	// ALERTS USER WHEN POSTING AN EMPTY COMMENT
    	currentText = this.parentElement.childNodes[1].value;
    	if (currentText == "") {
            alert("There's nothing to say!");
        }
        // CLONES EMPTY POST DIV AND APPENDS TO CONVERSATION
    	else {
    		var clone = host.cloneNode(true);
	    	clone.style.display = "block";

    		// ATTEMPTING TO CORRECTLY FORMAT NEW COMMENT
	    	clone.childNodes[1].style.display = "inline";
	    	// clone.childNodes[2].style.display = "inline"; // << THIS BREAKS THE PREVENTDEFAULT ??
	    	clone.childNodes[0].textContent = "";
	    	clone.childNodes[2].textContent = "";
	    	clone.childNodes[3].style.display = "inline";

	    	// POPULATE DATA INTO NEW POST TRYING TO MAINTAIN COMMENT FORMATTING
	    	clone.childNodes[3].childNodes[1].textContent = "Sumeet";
	    	clone.childNodes[3].childNodes[2].textContent = "\n\t" + currentText + "\n\t\n\t";
	    	clone.childNodes[3].childNodes[3].childNodes[8].textContent = "\n\t\t" + "Right now";

	    	if (this.classList.contains("bigtalk")){
	    		var commentCount = this.parentElement.parentElement.parentElement.parentElement.childNodes[1].childNodes[3].innerText;
	    		var replied = document.getElementsByClassName("post__comments")[0];
	    		replied.appendChild(clone);
	    		this.parentElement.childNodes[1].value = ""

	    		// UPDATE REPLY COUNTER
		    	newCount = commentCount.split(" ");
		    	newCount[0] = parseInt(newCount[0]) + 1;
		    	newCount = newCount.join(" ");
		    	this.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[3].childNodes[1].childNodes[3].innerText = newCount;

	    		// event.preventDefault();
	    	}
	    	else {
	    		var commentCount = this.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[3].childNodes[5].innerText;
	    		var replied = this.parentElement.parentElement.parentElement.parentElement;
	    		replied.insertBefore(clone, replied.lastElementChild);
	    		this.parentElement.childNodes[1].value = ""

	    		// UPDATE REPLY COUNTER
		    	if (commentCount == "Reply") {
		    		newCount = "0 Replies"
		    	}
	    		else {
	    			newCount = commentCount.split(" ");
	    		}
		    	newCount[0] = parseInt(newCount[0]) + 1;
		    	newCount = newCount.join(" ");
		    	this.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[3].childNodes[5].innerText = newCount;

	    		// event.preventDefault();
	    	}
	    	// event.preventDefault();
	    }
	    event.preventDefault();
    }

    function viewProfile(){
    	// REVEALS MODAL WTIH PROFILE INFO DISPLAYED
    	document.getElementsByClassName("modal")[0].style.display = "block";
    	document.getElementsByClassName("modal__title")[0].innerText = this.innerText;
    	document.getElementsByClassName("modal__body")[0].innerText = "55 Friends";
    }

    function sharePost(){
    	// REVEALS MODAL WITH POST'S USER AND CONTENT DISPLAYED
    	content = this.parentElement.parentElement.childNodes[3].innerText;
    	poster = this.parentElement.parentElement.childNodes[1].childNodes[3].childNodes[1].innerText;
    	document.getElementsByClassName("modal")[0].style.display = "block";
    	document.getElementsByClassName("modal__title")[0].innerText = "Share " + poster + "'s post:";
    	document.getElementsByClassName("modal__body")[0].innerText = content;
    }

    function closeModal(){
    	// CLOSES MODAL WINDOW WHEN 'X' IS CLICKED
    	document.getElementsByClassName("modal")[0].style.display = "none";
    }

    function ignoreModal(e){
    	// CLOSES MODAL WINDOWN WHEN BACKGROUND IS CLICKED
    	if (e.target == this) {
    		document.getElementsByClassName("modal")[0].style.display = "none";
    	}
    }
});