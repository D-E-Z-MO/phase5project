class NewIceBreakersController < ApplicationController
  def index
    render json: NewIceBreakers.all
  end

  def show 
    newIceBreaker = NewIceBreaker.find_by(params[:id]), include: :reponses
  end


end
