class AddColumnsToReservations < ActiveRecord::Migration[5.2]
  def change
  	add_column :reservations, :user_id, :integer, null: false, index: true
  	add_column :reservations, :restaurant_id, :integer, null: false, index: true
  	add_column :reservations, :time, :string, null: false
  	add_column :reservations, :date, :string, null: false 
  	add_column :reservations, :seats, :integer, null: false 



  end
end
