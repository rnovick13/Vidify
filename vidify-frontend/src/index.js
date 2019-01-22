document.addEventListener('DOMContentLoaded', ()=>{
  fetch('http://localhost:3000/playlists/')
  .then(res => res.json())
  .then(playlists => {
    renderPlaylists(playlists)
  })
})

<<<<<<< HEAD
function renderPlaylists(playlists) {
    let headerTag = document.querySelector('#name')
    // playlist.forEach(playlist => {renderPlaylist(playlist)})
    headerTag.innerText = `${playlists.name}`
    debugger
=======
function renderPlaylist(playlist) {
  debugger
    let headerTag = document.querySelector('name')

    playlist.forEach(playlist => {renderPlaylist(playlist)})

    // debugger
    headerTag.innerText = `${playlist.name}`
>>>>>>> b645300a68a7d2ee501fe49f73ffb452016608cb
    headerTag.classList.add('playlist')
}

//create card div that will format each playlist - pokemon teams lab
//appendchild to make it show on the DOM
//
