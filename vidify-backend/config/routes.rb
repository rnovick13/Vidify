Rails.application.routes.draw do

  # get 'playlist_videos/index'
  resources :videos, only: [:index, :show, :create]
  resources :playlists, only: [:index, :show, :new, :create]
end
