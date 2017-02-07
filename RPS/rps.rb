require 'pry'

$p1score = 0
$p2score = 0

# BEGINS SERIES, GETS FIRST WEAPON
def game()
	puts "Let's play! Player 1, choose a weapon. Press ctrl+C to cancel."
	initp1()
end

# CHECKS VALIDITY OF FIRST WEAPON. IF VALID, GETS SECOND WEAPON
def initp1()
	p1weapon = gets.chomp.downcase
	realweap = checkweap(p1weapon)
	if realweap == true
		puts "Player 2, choose a weapon."
		initp2(p1weapon)
	else
		puts "That's not a valid weapon. Please choose 'rock', 'paper', or 'scissors'."
		game()
	end
end

# CHECKS VALIDITY OF SECOND WEAPON. IF VALID, CALCULATES RESULT
def initp2(p1weapon)
	p2weapon = gets.chomp.downcase
	realweap = checkweap(p2weapon)
	if realweap == true
		winner(p1weapon, p2weapon)
	else
		puts "That's not a valid weapon. Please choose 'rock', 'paper', or 'scissors'."
		initp2(p1weapon)
	end
end

# RUNS CHECK IF WEAPON IS VALID
def checkweap(weapon)
	if (weapon == 'rock' or weapon == 'paper' or weapon == 'scissors')
		return true
	else
		return false
	end
end

# CALCULATES RESULT
def winner(p1weapon, p2weapon)
	if ((p1weapon == 'rock' and p2weapon == 'scissors') or (p1weapon == 'paper' and p2weapon == 'rock') or (p1weapon == 'scissors' and p2weapon == 'paper'))
		result = "Player 1 won!"
		puts result
		update(result)
		return result
	end
	if ((p2weapon == 'rock' and p1weapon == 'scissors') or (p2weapon == 'paper' and p1weapon == 'rock') or (p2weapon == 'scissors' and p1weapon == 'paper'))
		result = "Player 2 won!"
		puts result
		update(result)
		return result
	end
	if ((p1weapon == 'rock' and p2weapon == 'rock') or (p1weapon == 'paper' and p2weapon == 'paper') or (p1weapon == 'scissors' and p2weapon == 'scissors'))
		result = "Tie!"
		puts result
		update(result)
		return result
	end
end

# UPDATES SCORES
def update(result)
	if (result == "Player 1 won!")
		$p1score = $p1score + 1
		scorekeep()
		return $p1score
	end
	if (result == "Player 2 won!")
		$p2score = $p2score + 1
		scorekeep()
		return $p2score
	end
	if (result == "Tie!")
		scorekeep()
	end
end

# CHECKS IF EITHER PLAYER HAS WON THE SERIES
def scorekeep()
	if ($p1score >= 3)
		puts "Player 1 has won the game!"
		$p1score = 0
		$p2score = 0
	end
	if ($p2score >= 3)
		puts "Player 2 has won the game!"
		$p1score = 0
		$p2score = 0
	end
	if ($p1score + $p2score < 5)
		puts "Player 1 has #{$p1score} points and player 2 has #{$p2score} points."
		game()
	end
end

# STARTS THE SERIES
game()