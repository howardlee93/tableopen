class AddUserInfo < ActiveRecord::Migration[5.2]
  def change
  	add_column :user, :first_name, :string, null: false
  	add_column :user, :last_name, :string , null: false
  	add_column :user, :phone_number, :string 
  	add_column :user, :password_digest, :string, null: false 
  	add_column :user, :session_token, :string , null: false
  	add_index :users, :username, unique: true
    add_index :users, :session_token, unique: true
    add_index :users, :email, unique: true


  end
end
