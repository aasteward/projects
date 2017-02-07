require 'sinatra'
require 'pry'
require './rps.rb'

enable :sessions

$p1score = 0
$p2score = 0

get("/"){
	# NEW GAME BUTTON
}

post("/player1"){
	# P1 CHOICE
}

post("/player2"){
	# P2 CHOICE
}

post("/result"){
	# SHOW WINNER AND CURRENT SCORE
}

post("/endgame"){
	# DECLARE WINNER AND PROMPT NEW GAME
}