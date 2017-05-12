require 'sinatra'

class Thermostat < Sinatra::Base

	get '/' do
		headers{Access-Control-Allow-Origin} => '*'
		
	end

	post '/temperature' do
			new temperature
	end

end
