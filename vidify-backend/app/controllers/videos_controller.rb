class VideosController < ApplicationController
  def index
    @videos = Video.all
    render json: @videos
  end

  def show
    @video = Video.find(params[:id])
    render json: @video
  end

  def create
    @video = Video.create(strong_params)
    render json: @video
  end


    private

    def strong_params
      params.require(:video).permit(
        :name,
        :source
      )
    end

  end
