document.addEventListener('DOMContentLoaded', ()=>{
  fetch('http://localhost:3000/playlists/')
  .then(res => res.json())
  .then(playlist => { renderPlaylist(playlist)
  })
})

function renderPlaylist(playlist) {
    let headerTag = document.querySelector('name')
    playlist.forEach(playlist => {renderPlaylist(playlist)})
    // debugger
    headerTag.innerText = `${playlist.name}`
    headerTag.classList.add('playlist')
}
