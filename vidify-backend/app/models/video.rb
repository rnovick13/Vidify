class Video < ApplicationRecord
  has_many :playlist_videos
  has_many :playlists, through: :playlist_videos
end
