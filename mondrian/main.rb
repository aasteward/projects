require 'JSON'
require 'pry'
require 'CSV'
require 'sinatra'

get("/") do
	erb :index
end

get("/save") do
	def savePainting(list)
		info = File.open("./saved-paintings.csv", "a")
		info.print list + "\n"
		info.close
	end
	data = params[:color_list]
	savePainting(data)
end
