var prompt = require('prompt');
var p1score = 0;
var p2score = 0;

prompt.start();

// BEGINS SERIES
begin();

// STARTS ROUND AND PROMPTS FIRST WEAPON
function begin() {
	console.log("Let's play rock, paper, scissors! First player, choose your weapon.");
	initP1();
}

// CHECKS VALIDITY OF FIRST WEAPON. IF VALID, PROMPTS SECOND WEAPON
function initP1() {
	prompt.get([p1weapon], function (err, result) {
		p1weapon = p1weapon.toLowerCase();
		var realweap = checkweap(p1weapon);
		if (realweap == true){
			initP2();
		}
		else {
			console.log("That's not a valid weapon. Please choose 'rock', 'paper', or 'scissors'.")
		}
	 });
}

// CHECKS VALIDITY OF SECOND WEAPON. IF VALID, CALCULATES RESULT
function initP2(p1weapon) {
	prompt.get([p2weapon], function (err, result) {
		p2weapon = p2weapon.toLowerCase();
		var realweap = checkweap(p2weapon);
		if (realweap == true){
			winner(p1weapon, p2weapon)
		}
		else {
			console.log("That's not a valid weapon. Please choose 'rock', 'paper', or 'scissors'.")
		}
	})
}

// RUNS CHECK IF WEAPON IS VALID
function checkweap(weapon) {
	if ((weapon == "rock") || (weapon == "paper") || (weapon == "scissors")) {
		return true;
	}
	else {
		return false;
	}
}

// CALCULATES RESULT
function winner(p1weapon, p2weapon) {
	if ((p1weapon == "rock" && p2weapon == "scissors") || (p1weapon == "paper" && p2weapon == "rock") || (p1weapon == "scissors" && p2weapon == "paper")) {
		var result = "Player 1 won!";
		console.log(result);
		update(result);
		return result;
	}

	if ((p2weapon == "rock" && p1weapon == "scissors") || (p2weapon == "paper" && p1weapon == "rock") || (p2weapon == "scissors" && p1weapon == "paper")) {
		var result = "Player 2 won!";
		console.log(result);
		update(result);
		return result;
	}

	if ((p1weapon == "rock" && p2weapon == "rock") || (p1weapon == "paper" && p2weapon == "paper") || (p1weapon == "scissors" && p2weapon == "scissors")) {
		var result = "Tie!";
		console.log(result);
		update(result);
		return result;
	}
}

// UPDATES SCORES
function update() {
	if (result == "Player 1 won!") {
		p1score ++;
		scorekeep();
		return p1score;
	}

	if (result == "Player 2 won!") {
		p2score ++;
		scorekeep();
		return p2score;
	}
}

// CHECKS IF EITHER PLAYER HAS WON THE SERIES
function scorekeep() {
	if (p1score + p2score < 5) {
		console.log("Player 1 has ${p1score} points and player 2 has ${p2score} points.");
		begin();
	}
	if (p1score >= 3) {
		console.log("Player 1 has won the game!");
		p1score = 0;
		p2score = 0;
	}
	if (p2score >= 3) {
		console.log("Player 2 has won the game!");
		p1score = 0;
		p2score = 0;
	}
}