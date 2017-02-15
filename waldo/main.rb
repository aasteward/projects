require 'sinatra'
require 'CSV'
require 'JSON'
require 'pry'
require_relative './functions.rb'

enable :sessions

get("/") do
	erb :index
end

get("/check") do
	result = found(params)
	result = result.to_s
	if (result == "true")
		info = File.open("./public/scores.csv", "a")
		info.print # TIME HERE
		info.close
	end
	return result
end
