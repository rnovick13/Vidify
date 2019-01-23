class PlaylistSerializer < ActiveModel::Serializer
  attributes :id, :name, :source
  has_many :videos
end
