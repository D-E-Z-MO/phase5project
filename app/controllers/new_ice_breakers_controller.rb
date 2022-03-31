class NewIceBreakersController < ApplicationController
  def index
    render json: NewIceBreaker.all, include: :response
  end

  def show 
    newIceBreaker = NewIceBreaker.find_by(params[:id])
  end


end
