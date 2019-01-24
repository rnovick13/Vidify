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

  const headerTag = document.createElement('h2')
  headerTag.innerText = `${playlist.name}`
  headerTag.classList.add('card')

  const imgTag = document.createElement('img')
  imgTag.src=`${playlist.source}`
  imgTag.classList.add('card')

  const viewButton = document.createElement('button')
  viewButton.innerText = "View Playlist"
  viewButton.id = `view-${playlist.id}`
  viewButton.addEventListener('click', viewPlaylist)

  playlistDiv.appendChild(headerTag)
  playlistDiv.appendChild(imgTag)
  playlistDiv.appendChild(viewButton)
}

function viewPlaylist(e){
  let id = e.target.id.split('-')[1]
  document.open()
  // renderPlaylistVideos(id)
}

//potentially just remove div class="playlist" instead of document.open()
//we have the id
//fetch the playlist videos show page
//render the data on the web page



function renderPlaylistVideos(id){
  const playlistName = document.createElement('h1')
  //playlist name as header
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
  .then(r => r.json)
  .then(newPlaylistObj => {
    renderPlaylist(newPlaylistObj)
  })
  //called when button is clicked
  //modal pop up with form
  console.log("You booped the button!")
}

function getNewPlaylistName() {
  return document.getElementById("new-playlist-name")
}

function getNewPlaylistSource() {
  return document.getElementById("new-playlist-image")
}


function renderPlaylist() {
  console.log("Boop that button!")
}



//need to turn playlist names/images into links that reload with all the videos in that pl

//CSS to make all the pl images the same size

//create card div that will format each playlist - pokemon teams lab
