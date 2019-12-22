class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
     	t.string   :name
	    t.string   :guestNumber
	    t.string   :email
	    t.datetime :datetime
	    t.string   :phone
      t.timestamps
    end
  end
end
