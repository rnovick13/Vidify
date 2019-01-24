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
  let playlistDiv = document.querySelector('.playlist')


  let cardDiv = document.createElement('div')
  cardDiv.classList.add('card')

  const headerTag = document.createElement('h2')
  headerTag.innerText = `${playlist.name}`
  headerTag.classList.add('playlist')

  const imgTag = document.createElement('img')
  imgTag.src=`${playlist.source}`
  imgTag.classList.add('playlist')

  const viewButton = document.createElement('button')
  viewButton.innerText = "View Playlist"
  viewButton.id = `view-${playlist.id}`
  viewButton.classList.add('playlist')
  viewButton.addEventListener('click', viewPlaylist)

  cardDiv.appendChild(headerTag)
  cardDiv.appendChild(imgTag)
  cardDiv.appendChild(viewButton)
  playlistDiv.appendChild(cardDiv)
}

function viewPlaylist(e){
  let id = e.target.id.split('-')[1]
  let div = document.querySelector('.playlist')
  let videoDiv = document.createElement('div')
  videoDiv.classList.add('video-list')
  div.innerHTML = ""
  div.appendChild(videoDiv)

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
  // debugger;
  let videoPage = document.querySelector('.video-list')
  let videoCard = document.createElement('div')
  videoPage.appendChild(videoCard)

  const playlistName = document.createElement('h2')
  playlistName.innerText = data.name
  videoCard.appendChild(playlistName)

  data.videos.forEach(video => {
    const videoList = document.createElement('ul')
    const videos = document.createElement('li')
    videos.innerText = `${video.name}`
    videoList.appendChild(videos)
    videoCard.appendChild(videoList)

    const watchButton = document.createElement('button')
    watchButton.innerText = "Watch Video"
    videoCard.appendChild(watchButton)
    watchButton.addEventListener(
      'click', ()=>{linkToVideo(video.source)}
    )
    })
}
function linkToVideo(videoSource) {
  window.location=`${videoSource}`
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
