class AddUserInfo < ActiveRecord::Migration[5.2]
  def change
  	add_column :users, :first_name, :string, null: false
  	add_column :users, :last_name, :string , null: false
  	add_column :users, :phone_number, :string 
  	add_column :users, :password_digest, :string, null: false 
  	add_column :users, :session_token, :string , null: false
    add_index :users, :session_token, unique: true
    add_index :users, :email, unique: true


  end
end
