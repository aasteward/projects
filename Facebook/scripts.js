window.addEventListener("load", function(){
	var likes = document.getElementsByClassName("action--like");
	var unlikes = document.getElementsByClassName("action--unlike");
	var replies = document.getElementsByClassName("action--reply");
	var commenter = document.getElementsByClassName("action--comment")[0];
	var posts = document.getElementsByClassName("button");

	likes[0].addEventListener("click", plike);
	unlikes[0].addEventListener("click", punlike);
	unlikes[0].style.display = "none";
	commenter.addEventListener("click", comment);

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
		posts[i].addEventListener("click", emptyComment);
		posts[i].addEventListener("click", postComment);
	}

	function plike(){ //BROKEN ??
		this.style.display = "none";
		this.nextElementSibling.style.display = "inline-block";
		var count = this.parentElement.parentElement.parentElement.getElementsByClassName("like_count")[0].innerText;
		count = count.split(" ");
		count[0] = parseInt(count[0]) + 1;
		count = count.join(" ");
		this.parentElement.parentElement.parentElement.getElementsByClassName("like_count")[0].innerText = count;
	}

	function punlike(){ // BROKEN ??
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
		countarr = count.split(" ");
		countarr[0] = parseInt(countarr[0]) + 1;
		count = countarr.join(" ");
		this.parentElement.getElementsByClassName('like_count')[0].innerText = count;
	}

	function unlike(){
		// HIDES 'UNLIKE' ANCHOR
		this.style.display = "none";
		// REVEALS SIBLING 'LIKE' ANCHOR
		this.previousElementSibling.style.display = "inline-block";
		var count = this.parentElement.getElementsByClassName('like_count')[0].innerText;
		// DECREMENTS SIBLING 'LIKE_COUNT' SPAN
		countarr = count.split(" ");
		countarr[0] = parseInt(countarr[0]) - 1;
		count = countarr.join(" ");
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

	function emptyComment() {
		// ALERTS USER WHEN POSTING AN EMPTY COMMENT
        current_textbox = this.parentElement.childNodes[1].value;
        if (!current_textbox.match(/\S/)) {
            alert("There's nothing to say!");
        }
    }

    function postComment(){
    	// CLONES EMPTY POST DIV AND APPENDS TO CONVERSATION

    }

});