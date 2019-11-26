class UsersController < ApplicationController

  # GET /users
  # GET /users.json
  def index
    @users = User.all
    render :index
  end

  # GET /users/1
  # GET /users/1.json
  def show
    @user = User.find(params[:id])
    render :show

  end

  
  def create
    @user = User.new(user_params)

    if @user.save
      login_user!(@user)
      render "api/users/show"

    else
      render json @user.errors.full_messages, status: 422    
  end

  

  private
   
    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:name, :email)
    end
end
