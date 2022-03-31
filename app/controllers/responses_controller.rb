class ResponsesController < ApplicationController
  before_action :authorize, :newIce, :newUser 

  def show
    render json: @n.responses, status: :accepted
  end
  
  def create
    res =
      Response.create!(
        response_params)
    render json: res, status: :accepted
  end

  def delete 
    response = Response.find_by(params[:response_id]).where(user_id: params[:user_id])
    render json: delete.destroy, status: :accepted
  end

  private
    def response_params
      params.permit(:response, :new_ice_breaker_id, :user_id)
    end
    def newIce
      @n = NewIceBreaker.find_by_id(params[:id])
    end 
    def newUser
      @u = User.find_by_id(params[:user_id])
    end 
  end
