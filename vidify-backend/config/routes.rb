Rails.application.routes.draw do

  # get 'playlist_videos/index'
  resources :videos, only: [:index, :show]
  resources :playlists, only: [:index, :show]
end
