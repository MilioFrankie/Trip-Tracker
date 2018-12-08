class Api::TripsController < ApplicationController
    before_action :set_trip, only: [:destroy]
    def index
      render json: Trip.all
    end
  
    def create 
      trip = Trip.new(trip_params)
      if trip.save
        render json: trip
      else
        render json: { errors: trip.errors }, status: :unprocessable_entity
      end
    end
  
    def update
      trip = Trip.find(params)[:id]
      trip.update
      render json: trip
    end
  
    def destroy
      @trip.destroy
      render json: {message: "Trip Deleted"}
    end
  
    private
  
    def trip_params
      params.require(:trip).permit(:name, :start_date, :end_date)
    end
  
    def set_trip
      @trip = Trip.find(params[:id])
    end
  end
end
