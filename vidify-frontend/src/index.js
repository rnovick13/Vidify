document.addEventListener('DOMContentLoaded', ()=>{
  fetch('http://localhost:3000/playlists/')
  .then(res => res.json())
  .then(playlists => {
    renderPlaylists(playlists)
  })
})

function renderPlaylists(playlists) {
    let headerTag = document.querySelector('#name')
    // playlist.forEach(playlist => {renderPlaylist(playlist)})
    headerTag.innerText = `${playlists.name}`
    debugger
    headerTag.classList.add('playlist')
}
