class Reservations < ActiveRecord::Migration[5.2]
  def change
  	create_table "reservations", force: :cascade do |t|
    t.string   "name"
    t.string   "guestNumber"
    t.string   "email"
    t.datetime "datetime"
    t.string   "phone"
  end
end
