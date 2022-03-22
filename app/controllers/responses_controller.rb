class ResponsesController < ApplicationController

  def create 
    n = NewIceBreaker.find_by(params[:new_ice_breakers_id])
    u = User.find_by(params[:user_id])
    response =
      Response.create!(
        response: params[:response],
        newIceBreaker: n,
        user: u
      )
    response.to_json
  end

  def delete 
    response = Response.find_by(params[:response_id])
    render json: delete.destroy, status: :accepted
  end
end
