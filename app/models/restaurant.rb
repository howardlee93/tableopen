class Restaurant < ApplicationRecord
	validates :owner_id, :name, :address, :city, :state, :star, :zipcode, :phone_number,
    	:open_time, :close_time, :cuisine, :logo, presence: true

  	after_initialize :ensure_logo, :ensure_open_time, :ensure_close_time, :ensure_star

  	has_many :reservations,
    	primary_key: :id,
    	foreign_key: :restaurant_id,
    	class_name: :Reservation

  	# has_many :reviews,
   #  	primary_key: :id,
   #  	foreign_key: :restaurant_id,
   #  	class_name: :Review

  	# has_many :favorites

end

