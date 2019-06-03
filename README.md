# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version 2.5.1

* Rails version 5.2.3

* System dependencies
	sqlite3 as the database for Active Record

 	Puma as the app server  
 	
 	Use SCSS for stylesheets  
 	
 	Use Uglifier as compressor for JavaScript assets
 	
 	Use CoffeeScript for .coffee assets and views
 	
 	Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
 	
 	Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
 	
 	Use Redis adapter to run Action Cable in production
 	
 	Use ActiveModel has_secure_password
 	
 	Use Bootstrap 4 and Tempus Dominus BootStrap4 for styling
 	- to install:
 		1. Add gem 'bootstrap4-datetime-picker-rails' to your Gemfile
 		2. Execute bundle
 		3. Add //= require tempusdominus-bootstrap-4.js to your application.js
 		4. Add @import "tempusdominus-bootstrap-4.css" to your application.scss
 	Use JQuery and Momentjs 


* Configuration

-Uses PostgresSql to deploy to Heroku in production 

* To run

	In command line: 

 - $bundle
 
 - $rails db:migrate (for those using Rails 4: $ rake db:migrate)

 - $rails s