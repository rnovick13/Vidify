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
    @playlist = Playlist.create
    render json: @playlist
  end
end
