class ReservationsController < ApplicationController
 # before_action :set_reservation, only: [:show, :edit, :update, :destroy]

  # GET /reservations
  # GET /reservations.json
  def index
    @reservations = Reservation.all
  end

  # GET /reservations/1
  # GET /reservations/1.json
  def show
    @reservation = Reservation.find(params[:id])
  end

  # GET /reservations/new
  def new
    @reservation = Reservation.new
  end

  # GET /reservations/1/edit
  def edit
    @reservation = Reservation.find(params[:id])
  end

  # POST /reservations
  # POST /reservations.json
  def create
    @reservation = Reservation.new(reservation_params)

    if @reservation.save
      flash[:success] = 'Reservation created!'
      redirect_to reservations_path
    else
      flash[:error] = 'Error creating reservation'
      redirect_to :new
    end 


  end

  # PATCH/PUT /reservations/1
  # PATCH/PUT /reservations/1.json
  def update
    @reservation = Reservation.find(params[:id])
    @reservation.update(reservation_params)

    if @reservation.save
      flash[:success] = 'Reservation saved!'
    else 
      flash[:error] = 'Error saving reservation'
      render :edit
    end 

  end

  # DELETE /reservations/1
  # DELETE /reservations/1.json
  def destroy
    Reservation.find(params[:id]).destroy
   redirect_to reservations_path
  end

  def destroy_all
    Reservation.all.destroy_all
    redirect_to reservations_path
  end 
  

  private
    

    # Never trust parameters from the scary internet, only allow the white list through.
    def reservation_params
      params.require(:reservation).permit(:name, :guestNumber, :datetime, :phone, :email) 
    end
end
