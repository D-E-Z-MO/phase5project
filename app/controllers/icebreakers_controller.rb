class IcebreakersController < ApplicationController
  def index
    icebreakers = @current_user.icebreakers.all 
    render json: icebreakers
  end

  def show
    render json: Icebreaker.find_by(params[:user_id])
  end

  def create
    icebreaker = @current_user.icebreakers.create!(icebreaker_params)
    render json: icebreaker, status: :created
  end

  def delete
    delete =  Icebreaker.find_by(params[:icebreaker_id])
    render json: delete.destroy, status: :accepted
  end

  private

  def icebreaker_params
    params.permit(:content, :tags)
  end
end

