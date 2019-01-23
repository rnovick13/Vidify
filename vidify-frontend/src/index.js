document.addEventListener('DOMContentLoaded', ()=>{
  fetch('http://localhost:3000/playlists/')
  .then(res => res.json())
  .then(playlists => {
    renderPlaylists(playlists)
  })
})


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
  renderPlaylistVideos(id)
}

//potentially just remove div class="playlist" instead of document.open()
//we have the id
//fetch the playlist videos show page
//render the data on the web page



function renderPlaylistVideos(id){
  const playlistName = document.createElement('h1')
  // const playlist =
  // debugger
  // playlistName.innerText =
  //playlist name as header
  //list video names
  //video names clickable links to actual videos
}



//need to turn playlist names/images into links that reload with all the videos in that pl

//CSS to make all the pl images the same size

//create card div that will format each playlist - pokemon teams lab


//
// function renderComment(comment){
//   let li = document.createElement("li")
//   li.innerHTML = `${comment.content}`
//   ul.appendChild(li)
//
// }
// function renderCommentList(data){
//   let form = document.querySelector("#comment_form")
//   let ul = document.querySelector("#comments")
//   data.comments.forEach(comment => {
//     renderComment(comment)
//   })
//
//   function getCommentData(data, content){
//   return{
//     'image_id': data.id,
//     'content': content
//   }
// }
