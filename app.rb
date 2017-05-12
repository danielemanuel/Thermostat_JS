require 'sinatra'


class Thermostat < Sinatra::Base
set :public_folder, 'public'

	get '/' do
		redirect '/index.html'
	end

	post '/temperature' do
			new temperature
	end

end
