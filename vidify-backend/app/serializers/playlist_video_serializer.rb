class PlaylistVideoSerializer < ActiveModel::Serializer
  attributes :id, :video_id, :playlist_id
end
