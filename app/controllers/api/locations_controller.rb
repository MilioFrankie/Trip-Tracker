class Api::LocationsController < ApplicationController
  
  def index
    render json: Location.all
  end

  def create
    location = Location.new(location_params)
    if location.save
      render json: location
    else
      render json: { errors: location.errors }
    end
  end

  def update
    location = Location.find(params[:id])
    location.update
    render json: location
  end

  def destroy
    Location.find(params[:id]).destroy
    render json: {message: "Location Deleted"}
  end

  private
    def location_params
      params.require(:location).permit(:name, :days, :trip_id)
    end
    
end