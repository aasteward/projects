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
	return result
end

get("/score") do
	info = File.open("./public/scores.csv", "a")
	info.print params[:n] + "," + params[:t] + ",seconds\n"
	info.close
end

get("/board") do
	scoreList = scoreboard()
	scoreList = scoreList.map{|k,v| "#{k}\s#{v}"}.join("\sSeconds\n")
	scoreList = scoreList.to_s + " Seconds"
	return scoreList
end
