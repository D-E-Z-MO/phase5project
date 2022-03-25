class NewIceBreakersController < ApplicationController
  def index
    render json: NewIceBreaker.all
  end

  def show 
    newIceBreaker = NewIceBreaker.find_by(params[:id])
  end


end
