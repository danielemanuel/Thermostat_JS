require 'sinatra'


class Thermostat < Sinatra::Base
set :public_folder, 'public'
enable :sessions

	get '/' do
		redirect '/index.html'
	end

	post '/city/new' do
		session[:city] = params[:current_city]
		redirect '/'
	end

end
