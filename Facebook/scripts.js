window.addEventListener("load", function(){
	// PREPARES VARIABLES FOR TRIGGER LOOPS
	var likes = document.getElementsByClassName("action--like");
	var unlikes = document.getElementsByClassName("action--unlike");
	var replies = document.getElementsByClassName("action--reply");
	var commenter = document.getElementsByClassName("action--comment")[0];
	var posts = document.getElementsByClassName("button");
	var sharer = document.getElementsByClassName("action--share")[0];
	var viewer = document.getElementsByClassName("profile");
	var bigX = document.getElementsByClassName("modal__close")[0];

	// SETS INDIVIDUAL TRIGGERS AND HIDES ALL 'UNLIKE' ANCHORS
	likes[0].addEventListener("click", plike);
	unlikes[0].addEventListener("click", punlike);
	commenter.addEventListener("click", postComment);
	sharer.addEventListener("click", sharePost);
	bigX.addEventListener("click", closeModal);
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
		posts[i].addEventListener("click", emptyComment);
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

	function emptyComment(){
		// ALERTS USER WHEN POSTING AN EMPTY COMMENT
        current_textbox = this.parentElement.childNodes[1].value;
        if (!current_textbox.match(/\S/)) {
            alert("There's nothing to say!");
        }
    }

    function postComment(){
    	// CLONES EMPTY POST DIV AND APPENDS TO CONVERSATION

    }

    function viewProfile(){
    	// REVEALS MODAL WTIH PROFILE INFO DISPLAYED
    	document.getElementsByClassName("modal")[0].style.display = "block"
    	document.getElementsByClassName("modal__title")[0].innerText = this.innerText
    	document.getElementsByClassName("modal__body")[0].innerText = "55 Friends" 
    }

    function sharePost(){
    	// REVEALS MODAL WITH POST'S USER AND CONTENT DISPLAYED
    	content = this.parentElement.parentElement.childNodes[3].innerText
    	poster = this.parentElement.parentElement.childNodes[1].childNodes[3].childNodes[1].innerText
    	document.getElementsByClassName("modal")[0].style.display = "block"
    	document.getElementsByClassName("modal__title")[0].innerText = "Share " + poster + "'s post:"
    	document.getElementsByClassName("modal__body")[0].innerText = content
    	
    }

    function closeModal(){
    	// CLOSES MODAL WINDOW WHEN 'X' OR BACKGROUND IS CLICKED
    	document.getElementsByClassName("modal")[0].style.display = "none"
    }

});