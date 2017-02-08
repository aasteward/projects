window.addEventListener("load", function(){

	var host = document.getElementsByClassName("sample")[0]

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

	// SETS INDIVIDUAL TRIGGERS AND HIDES ALL 'UNLIKE' ANCHORS
	likes[0].addEventListener("click", plike);
	unlikes[0].addEventListener("click", punlike);
	commenter.addEventListener("click", comment);
	sharer.addEventListener("click", sharePost);
	bigX.addEventListener("click", closeModal);
	modalBG.addEventListener("click", ignoreModal);
	unlikes[0].style.display = "none";

	// CREATES EVENT TRIGGERS ON 'LIKE' AND 'UNLIKE' ANCHORS
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
		// WHEN 'REPLY' IS CLICKED, SHOULD SHOW/HIDE MODAL OF REPLY THREAD.
		var reply_area = this.parentElement.parentElement.getElementsByClassName('replies')[0]
		if (reply_area.style.display == "none"){
			reply_area.style.display = "block";
		}
		else {
			reply_area.style.display = "none";
		}
	}

    function postComment(e){
    	// ALERTS USER WHEN POSTING AND EMPTY COMMENT
    	currentText = this.parentElement.childNodes[1].value;
    	if (currentText == "") {
            alert("There's nothing to say!");
        }
        // CLONES EMPTY POST DIV AND APPENDS TO CONVERSATION
    	else {
    		var clone = host.cloneNode(true);
	    	clone.style.display = "block";
	    	if (this.classList.contains("bigtalk")){
	    		var commentCount = this.parentElement.parentElement.parentElement.parentElement.childNodes[0].childNodes[1].innerText;
	    		var replied = document.getElementsByClassName("post__comments")[0];
	    		replied.appendChild(clone);
	    	}
	    	else {
	    		var commentCount = this.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].childNodes[2].innerText;
	    		var replied = this.parentElement.parentElement.parentElement.parentElement;
	    		replied.insertBefore(clone, replied.childNodes[-2]);
	    	}
	    	// UPDATE REPLY COUNTER
	    	commentCount = commentCount.split(" ");
	    	commentCount[0] = parseInt(commentCount[0]) + 1;
	    	commentCount.join(" ");
	    	// POPULATE DATA INTO NEW POST
	    	clone.childNodes[1].childNodes[0].textContent = "Sumeet";
	    	clone.childNodes[1].childNodes[2].childNodes[2].textContent = "Reply";
	    	clone.childNodes[1].childNodes[2].childNodes[3].textContent = "0 Likes";
	    	clone.childNodes[1].childNodes[1].textContent = currentText;
	    }
	    e.preventDefault();
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