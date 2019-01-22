document.addEventListener('DOMContentLoaded', ()=>{
  fetch('http://localhost:3000/playlists/')
  .then(res => res.json())
  .then(playlist => { renderPlaylist(playlist)
  })
})

function renderPlaylist(playlist) {
  debugger
    let headerTag = document.querySelector('name')

    playlist.forEach(playlist => {renderPlaylist(playlist)})

    // debugger
    headerTag.innerText = `${playlist.name}`
    headerTag.classList.add('playlist')
}

//create card div that will format each playlist - pokemon teams lab
//appendchild to make it show on the DOM
//
