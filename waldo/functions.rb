require 'CSV'
require 'pry'

# PASSES PARAMS TO CHECK IF EITHER WALDO OR WANDA WAS FOUND
def found(params)
	x = params[:x]
	y = params[:y]
	found_him = true
	fount_her = true
	# BOUNDS OF CLICKING ON WALDO
	if ((525 - x.to_i).abs <= 15) && ((560 - y.to_i).abs <= 30)
		found_him = true
		found_her = false
	# BOUNDS OF CLICKING ON WANDA
	elsif ((530 - x.to_i).abs <= 10) && ((445 - y.to_i).abs <= 10)
		found_him = false
		found_her = true
	else
		found_him = false
		found_her = false
	end
	return found_him
	return found_her

