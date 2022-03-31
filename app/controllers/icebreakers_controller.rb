class IcebreakersController < ApplicationController
 rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity
 before_action :authorize, exception: :destroy

  def index
    @i = @current_user.icebreakers.all 
    render json: @i
  end

  def show
    u = User.find_by(id: session[:user_id])
    i = u.icebreakers.all 
    render json: i
  end

  def create
    u = User.find_by(id: session[:user_id])
    @i = u.icebreakers.create!(icebreaker_params) 
    if @i
      render json: @i, status: :created
    else
      render json: [error: i.errors.full_messages], status: :unprocessable_entity
    end
  end

  def destroy
    ice  =  Icebreaker.find_by(params[:icebreaker_id])
    ice.destroy
    head :no_content
  end




  private
    def icebreaker_params
      params.require(:icebreaker).permit(:id, :content, :tags, :flames)
    end
    def validation_errors(exception)
      render json: {error: [exception.full_message]}, status: :unprocessable_entity
    end
    def unprocessable_entity
      render json: {errors: record.errors.full_messages}, status: :unprocessable_entity
    end
  
end

