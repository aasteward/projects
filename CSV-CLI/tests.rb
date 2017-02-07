require_relative './functions.rb'
require "pry"

def results(expected, actual)
	if expected == actual
		puts "Pass"
	else
		puts "Fail"
		puts "Expected #{expected}, but got #{actual}."
	end
end

def add_categories(cats)
	cats.each do |each|
		if !@categories.already_has_category(each)
	    	categories.add_category(each)
	  	end
    end
end

def test_sums(amount)
	test1 = AccountInfo.new
	test1.set_up_initial_values
	test1.update_tally(amount)
	results(test1.tally, amount)
end

test_sums(12.0)

def test_sums2(amount)
	test2 = Category.new
	test2.set_up_initial_values
	test2.add_transaction(amount)
	results(test2.tally, amount)
end

test_sums2(5.5)

def test_avgs(amt1, amt2, amt3)
	test3 = Category.new
	test3.set_up_initial_values
	test3.add_transaction(amt1)
	test3.add_transaction(amt2)
	test3.add_transaction(amt3)
	results(test3.avr_trans, (amt1 + amt2 + amt3) / 3 )
end

test_avgs(6, 4, 8)


def test_uniq(cats)
	test4 = AccountInfo.new
	test4.set_up_initial_values
	test4.add_categories(cats)
    results(test4.categories.keys.to_a, cats.uniq)
end

cats = ["egg", "egg", "dog", "egg"]

test_uniq(cats)