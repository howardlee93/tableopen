class Api::ReservationsController < ApplicationController
 # before_action :set_reservation, only: [:show, :edit, :update, :destroy]

  # GET /reservations
  # GET /reservations.json
  def index
    user = User.find_by(id: params[:userId])
    if user
      @reservations = user.reservations.order(:date)
    else
      render json: ["User not found"], status: 404
    end 
  end

  # GET /reservations/1
  # GET /reservations/1.json
  def show
    @reservation = Reservation.find(params[:id])
    render :show 
  end

 
  # POST /reservations
  # POST /reservations.json
  def create
    @reservation = Reservation.new(reservation_params)

    if @reservation.save
      render 'api/reservations/show'
    else
      render json: @reservation.errors.full_messages, status: 422

    end 


  end

  

  # DELETE /reservations/1
  # DELETE /reservations/1.json
  def destroy
    reservation = Reservation.find(params[:id])
    if reservation
      reservation.destroy
      render json: reservation
    else 
      render json: ["Reservation doesnt exist"], status: 404 
    end 
  end
  

  private
    

    # Never trust parameters from the scary internet, only allow the white list through.
    def reservation_params
      params.require(:reservation).permit(:name, :guestNumber, :datetime, :phone, :email) 
    end
end
