class Api::AddressesController < ApplicationController
    before_action :set_location, only: [:index, :create, :update, :destroy]

    def index
        render json: @location.addresses.all
    end
    
    def create
        address = @location.addresses.new(address_params)
        if address.save
            render json: address
        else
            render json: { errors: address.errors }
        end
    end
    
    def update
        address = @location.addresses.find(params[:id])
        address.update
        render json: address
    end

    def destroy
        @location.addresses.find(params[:id]).destroy
        render json: { message: 'Address deleted' } 
    end
    
    private
    def address_params
        params.require(:address).permit(:street, :city, :state, :zip)
    end
    
    def set_location
        @location = Location.find(params[:location_id])
    end
end
