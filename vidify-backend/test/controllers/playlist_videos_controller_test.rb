require 'test_helper'

class PlaylistVideosControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get playlist_videos_index_url
    assert_response :success
  end

end
