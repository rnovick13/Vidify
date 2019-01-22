# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
cooking = Playlist.create(name: "Cooking")
coding = Playlist.create(name: "Coding")
learn_music = Playlist.create(name: "Learn to Play Music")
music = Playlist.create(name: "Best Songs Ever")

vid1 = Video.create(name: "How to Make Dried Bread", source: "https://www.youtube.com/watch?v=Qtgsqxmz-ew&list=PLbS0HkS8Xsorrdr3pPk4lP80tUAzfyxP1&index=3")
vid2 = Video.create(name: "How to Master 5 Basic Cooking Skills", source: "https://www.youtube.com/watch?v=ZJy1ajvMU1k")
# vid3 =

plv1 = PlaylistVideo.create(video_id: 1, playlist_id: 1)
plv1 = PlaylistVideo.create(video_id: 2, playlist_id: 1)
