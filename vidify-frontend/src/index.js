document.addEventListener('DOMContentLoaded', ()=>{
  fetch('http://localhost:3000/playlists/')
  .then(res => res.json())
  .then(data => {
    renderPlaylists(data)
  })
  create().addEventListener('click', () => {
    if (playlistFormDiv().style.display == 'none') {
      playlistFormDiv().style.display = 'block'
      getNewPlaylistForm().addEventListener('submit', createPlaylist)
    } else {
      playlistFormDiv().style.display = 'none'
    }
  })
  // replaceDOM()
})

function resetForm() {
  document.getElementById('new-playlist-form').reset()
}

function getNewPlaylistForm() {
  return document.getElementById('new-playlist-form')
}

function playlistFormDiv() {
  return document.querySelector('.container')
}

function renderPlaylists(playlists) {
    playlists.forEach(playlist => {
      playlistInfo(playlist)
    })
}

function playlistInfo(playlist) {
  let playlistDiv = document.querySelector('.playlist') //grandparent

  // playlistDiv.classList.add('card')
  //make mommy or daddy aka div
  let cardDiv = document.createElement('div')
  cardDiv.classList.add('card')

  const headerTag = document.createElement('h2')
  headerTag.innerText = `${playlist.name}`
  headerTag.classList.add('playlist')
  // headerTag.classList.add('card')

  const imgTag = document.createElement('img')
  imgTag.src=`${playlist.source}`
  imgTag.classList.add('playlist')
  // imgTag.classList.add('card')

  const viewButton = document.createElement('button')
  viewButton.innerText = "View Playlist"
  viewButton.id = `view-${playlist.id}`
  viewButton.classList.add('playlist')
  // viewButton.classList.add('card')
  viewButton.addEventListener('click', viewPlaylist)

  cardDiv.appendChild(headerTag)
  cardDiv.appendChild(imgTag)
  cardDiv.appendChild(viewButton)
  playlistDiv.appendChild(cardDiv)
}
//potentially just remove div class="playlist" instead of document.open()
//we have the id
//fetch the playlist videos show page
//render the data on the web page

function replaceDOM() {
  let body = document.querySelector(".site-body")
  body.innerHTML = ""

  // let home = document.querySelector(".playlist")
  let newPage = document.querySelector(".video-list")
  body.appendChild(newPage)


}

function viewPlaylist(e){
  let id = e.target.id.split('-')[1]
  // document.open()
  //remove div class "playlist"
  getVideos(id)
  // renderPlaylistVideos(id)
}

function getVideos(id) {
  fetch(`http://localhost:3000/playlists/${id}`)
  .then(res => res.json())
  .then(data => {
    renderPlaylistVideos(data)
  })
}

function renderPlaylistVideos(data){
  let videoPage = document.querySelector('.video-list')

  const playlistName = document.createElement('h2')
  playlistName.innerText = data.name
  // debugger
  videoPage.appendChild(playlistName)
  //playlist name as header

  data.videos.forEach(video => {
    const videoList = document.createElement('ul')
    const videos = document.createElement('li')
    videos.innerText = `${video.name}`
    videoList.appendChild(videos)

    const watchButton = document.createElement('button')
    watchButton.innerText = "Watch Video"
    // watchButton.addEventListener('click', linkToVideo(video.source))
    // console.log("Hits")
    })

    function linkToVideo(videoSource) {

    }

  //list video names
  //video names clickable links to actual videos
}

function create(){
  return document.getElementById("create")
}

function createNewPlaylist(newPlaylistInfo) {
  const data = newPlaylistInfo
  return fetch('http://localhost:3000/playlists', {
    method: "POST",
    headers:
    {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(data)
  })
}

function createPlaylist(e){
  e.preventDefault()
  const newPlaylist = {
    name: getNewPlaylistName().value,
    source: getNewPlaylistSource().value
  }

  createNewPlaylist(newPlaylist)
  .then(newPlaylist => newPlaylist.json())
  .then(newPlaylistObj => {
    playlistInfo(newPlaylistObj)
  })
}

function getNewPlaylistName() {
  return document.getElementById("new-playlist-name")
}

function getNewPlaylistSource() {
  return document.getElementById("new-playlist-image")
}




//need to turn playlist names/images into links that reload with all the videos in that pl

//CSS to make all the pl images the same size

//create card div that will format each playlist - pokemon teams lab
