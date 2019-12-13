class Api::SessionsController < ApplicationController


  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      login_user!(@user)
      render template: "api/users/show"
  	else 
  		render json: ['Invalid username and password']
    end
  end

  def destroy
  	@user = current_user
  	if @user 
		logout_user!
    	render json: {} 
    else 
    	render json: ["Nobody signed in"], status: 404
    end 
  end



end 