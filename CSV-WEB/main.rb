require "sinatra"
require_relative './functions.rb'
require "pry"
require "csv"
enable :sessions

# BUILDS ACCOUNT FOR DISPLAY
def display(name)
	account = AccountInfo.new
	account.set_up_initial_values
	account.build_report(name)
	return account
end

# ADDS INFO STRING TO CSV FILE
def write_info(new_info)
	info = File.open("/Users/aasteward/Code/drills/007/accounts.csv", "a")
	info.print new_info
	info.close
end

# HASH OF VALID LOGINS AND PASSWORDS
logins = {"administrator" => "drowssap", "aasteward" => "builder"}

# LOGIN PAGE. REDIRECT TO ADMIN IF ALREADY LOGGED IN
get("/"){
	if session[:message] == "true"
		redirect("/admin")
	else
		erb :login
	end
}

# CHECKS FOR VALID LOGIN. REDIRECT TO ADMIN IF VALID, TO ERROR IF INVALID
post("/login"){
	if (logins.has_key?(params["user"]) == true) and (logins[params["user"]] == params["pass"])
		session[:message] = "true"
		redirect("/admin")
	else
		session[:message] = "false"
		redirect("/login_error")
	end
}

# SETS USER TO LOGGED OUT, REDIRECTS TO LOG IN PAGE
post("/logout"){
	session[:message] = "false"
	redirect("/")
}

# ADMIN PAGE FOR ENTERING TRANSACTIONS. REDIRECT TO LOGIN ERROR IF NOT LOGGED IN
get("/admin"){
	if session[:message] == "true"
		erb :admin
	else
		redirect("/login_error")
	end
}

# COPY OF LOGIN PAGE FOR LOGIN ERRORS
get("/login_error"){
	if session[:message] == "false"
		erb :login_error
	else
		redirect("/admin")
	end
}

# BUILDS STRING ENTRY TO APPEND TO CSV FILE
post("/submit") {
	info_array = []
	info_array.push(params["account"], params["date"], params["payee"], params["category"], params["outflow"], params["inflow"])
	new_info = "\n" + info_array.join(",")
	write_info(new_info)
	redirect("/report?name=#{params["account"]}")
}

# DISPLAY LIST OF REPORTS TO VIEW
get("/index") {
	erb :index
}

# DISPLAY LIST OF SINGLE ACCOUNT
get("/report") {
	@name = params["name"]
	@account = display(@name)
	erb :report
}

# DISPLAY OF ALL ACCOUNTS
get("/full") {
	@names = ["Sonia", "Priya"]
	@all_accounts = []
	@names.each do |account|
		@all_accounts.push(display(account))
	end
	erb :full
}
