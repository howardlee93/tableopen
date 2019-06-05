Rails.application.routes.draw do
  resources :users
	resources :reservations
	resources :static_pages



  	get  '/signup',  to: 'users#new'

  	#get  '/signup', to: 'static_pages#form'


  	get 'reservations', to: 'reservations#index'

  	root 'static_pages#home'



  # resources :reservations
  # # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
