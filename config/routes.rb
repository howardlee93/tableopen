Rails.application.routes.draw do

	namespace :api, defauklts: {format: :json} do 
		resource :session, only: [:create, :destroy, :show, :new]
		resources :users do
			resources :restaurants, only: [:create]
		end 

	end 

  	root 'static_pages#root'



  # resources :reservations
  # # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
