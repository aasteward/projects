require 'sinatra'
require 'CSV'
require 'JSON'
require 'pry'
require '/functions.rb'

enable :sessions

get("/") do
	erb :index
end

get("/check") do
	result = found(params)
	result = result.to_s
	return result
end

