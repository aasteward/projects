require "sinatra"
require_relative './functions.rb'
require "pry"
require "csv"
enable :sessions

def display(name)
	account = AccountInfo.new
	account.set_up_initial_values
	account.build_report(account, name)
	return account

end

def write_info(new_info)
	info = File.open("/Users/aasteward/Code/drills/007/accounts.csv", "a")
	info.print new_info
	info.close
end

# HASH OF VALID LOGINS AND PASSWORDS
logins = {"administrator" => "drowssap", "aasteward" => "builder"}

get("/"){
	if session[:message] == "true"
		redirect("/admin")
	else
		erb :login
	end
}

post("/login"){
	if (logins.has_key?(params["user"]) == true) and (logins[params["user"]] == params["pass"])
		session[:message] = "true"
		redirect("/admin")
	else
		session[:message] = "false"
		redirect("/login_error")
	end
}

post("/logout"){
	session[:message] = "false"
	redirect("/")
}

get("/admin"){
	if session[:message] == "true"
		erb :admin
	else
		redirect("/login_error")
	end
}

get("/login_error"){
	if session[:message] == "false"
		erb :login_error
	else
		redirect("/admin")
	end
}

post("/submit") {
	info_array = []
	info_array.push(params["account"], params["date"], params["payee"], params["category"], params["outflow"], params["inflow"])
	new_info = "\n" + info_array.join(",")
	write_info(new_info)
	account = params["account"]
	redirect("/report?name=#{account}")
}

get("/index") {
	erb :index
}

get("/report") {
	@name = params["name"]
	@account = display(@name)
	erb :report
}

get("/full") {
	@names = ["Sonia", "Priya"]
	@all_accounts = []
	@names.each do |account|
		@all_accounts.push(display(account))
	end
	erb :full
}
