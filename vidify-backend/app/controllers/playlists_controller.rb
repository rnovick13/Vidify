class PlaylistsController < ApplicationController
  def index
    @playlists = Playlist.all
    render json: @playlists
  end

  def show
    @playlist = Playlist.find(params[:id])
    render json: @playlist
  end

  def create
    @playlist = Playlist.create(strong_params)
    render json: @playlist
  end

  private

  def strong_params
    params.require(:playlist).permit(
      :name,
      :source
    )
  end

end
