class ReservationDetails < ActiveRecord::Migration[5.2]
  def change
  	add_column :reservations, :name, :string
    add_column :reservations, :guestNumber, :string
    add_column :reservations, :email, :string
    add_column :reservations, :datetime, :datetime
    add_column :reservations, :phone, :string

  end
end
