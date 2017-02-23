require "sinatra"

get("/") do
	erb :home
end

get("/about") do
	erb :about
end

get("/article") do
	erb :article
end

get("/index") do
	erb :index
end