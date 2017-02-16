require 'CSV'
require 'pry'

# PASSES PARAMS TO CHECK IF WALDO WAS FOUND
def found(params)
	x = params[:x]
	y = params[:y]
	found_him = true
	# found_her = true # ADDITIONAL FUNCTIONALITY FOR WANDA?
	# BOUNDS OF CLICKING ON WALDO
	if ((525 - x.to_i).abs <= 15) && ((560 - y.to_i).abs <= 30)
		found_him = true
		# found_her = false # ADDITIONAL FUNCTIONALITY FOR WANDA?
	# BOUNDS OF CLICKING ON WANDA
	# elsif ((530 - x.to_i).abs <= 10) && ((445 - y.to_i).abs <= 10)
		# found_him = false
		# found_her = true # ADDITIONAL FUNCTIONALITY FOR WANDA?
	else
		found_him = false
		# found_her = false # ADDITIONAL FUNCTIONALITY FOR WANDA?
	end
	return found_him
	# return found_her # ADDITIONAL FUNCTIONALITY FOR WANDA?
end

def scoreboard()
	topTen = {}
	CSV.foreach("./public/scores.csv", {headers: true}) do |row|
		playerName = row["name"].chomp
		playerTime = row["time"].chomp
		playerTime.to_f
		topTen[playerName] = playerTime
	end
	binding.pry
	topTen = topTen.sort_by(&:last)
	topTen = topTen[0..9]
	return topTen
end

