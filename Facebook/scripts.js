window.addEventListener("load", function(){
	var likes = document.getElementsByClassName("action--like");
	var unlikes = document.getElementsByClassName("action--unlike");
	var replies = document.getElementsByClassName("action--reply");
	var commenter = document.getElementsByClassName("action--comment")[0]; // BROKEN
	var posts = document.getElementsByClassName("button");

	likes[0].addEventListener("click", plike);
	unlikes[0].addEventListener("click", punlike);
	unlikes[0].style.display = "none";
	commenter.addEventListener("click", comment);

	for (var i = 1; i < unlikes.length; i++){
		unlikes[i].style.display = "none";
		likes[i].addEventListener("click", like);
		unlikes[i].addEventListener("click", unlike);
	}

	for (var x = 0; x < replies.length; x++){
		replies[x].addEventListener("click", showReplies);
	}

	for (var b = 0; b < posts.length; b++){
		posts[b].addEventListener("click", emptyComment);
	}

	function plike(){ //BROKEN ??
		this.style.display = "none";
		this.nextElementSibling.style.display = "inline-block";
		var count = this.closest("post").next(".like_count")[0].innerText;
		countarr = count.split(" ");
		countarr[0] = parseInt(countarr[0]) + 1;
		count = countarr.join(" ");
		this.closest("post").next(".like_count")[0].innerText = count;
	}

	function punlike(){ // BROKEN ??
		this.style.display = "none";
		this.previousElementSibling.style.display = "inline-block";
		var count = this.closest("post").next(".like_count")[0].innerText;
		countarr = count.split(" ");
		countarr[0] = parseInt(countarr[0]) - 1;
		count = countarr.join(" ");
		this.closest("post").next(".like_count")[0].innerText = count;
	}

	function like(){
		// WHEN 'LIKE' CLICKED, HIDES 'LIKE' ANCHOR, INCREMENTS SIBLING 'LIKE_COUNT' SPAN, AND REVEALS SIBLING 'UNLIKE' ANCHOR.
		this.style.display = "none";
		this.nextElementSibling.style.display = "inline-block";
		var count = this.parentElement.getElementsByClassName('like_count')[0].innerText;
		countarr = count.split(" ");
		countarr[0] = parseInt(countarr[0]) + 1;
		count = countarr.join(" ");
		this.parentElement.getElementsByClassName('like_count')[0].innerText = count;
	}

	function unlike(){
		// WHEN 'UNLIKE' CLICKED, HIDES 'UNLIKE' ANCHOR, DECREMENTS SIBLING 'LIKE_COUNT' SPAN, AND REVEALS SIBLING 'LIKE' ANCHOR.
		this.style.display = "none";
		this.previousElementSibling.style.display = "inline-block";
		var count = this.parentElement.getElementsByClassName('like_count')[0].innerText;
		countarr = count.split(" ");
		countarr[0] = parseInt(countarr[0]) - 1;
		count = countarr.join(" ");
		this.parentElement.getElementsByClassName('like_count')[0].innerText = count;
	}

	function comment(){ // BROKEN
		// WHEN 'COMMENT' IS CLICKED, FOCUSES CURSOR IN TEXT BOX.
		document.getElementById("44").focus();
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
		// ALERTS USER WHEN AN EMPTY COMMENT/REPLY IS SUBMITTED.
		post = this.previousElementSibling.innerText;
		if (post = ""){
			alert("There's nothing to say!")
		}
	}
});