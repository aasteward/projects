#!usr/bin/env ruby
require 'pry'


class Question
	def initialize
		@questions = []
		@list = "Users/aasteward/questions.txt"
	end

	def rewrite
		open(@questions) do |p|
			for entry in @questions
				entry = entry.chomp
				p.puts entry
			end
		end
	end

	def newQuestion(question)
		@questions.push(question)
		rewrite
	end

	def removeQuestion(spot_for_removal)
		index = spot_for_removal.to_i - 1
		questions.delete_at(index)
		rewrite
	end
	
	def showList
		for (i = 0, i < @questions.length, i++)
			item = i + 1
			puts "#{item}. #{@questions[i]}"
		end
	end

	def input(sentence)
		when "add"
			add(sentence)
		when "rm"
			remove(sentence)
		when nil
			disp
		end
end

