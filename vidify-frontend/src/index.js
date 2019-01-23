document.addEventListener('DOMContentLoaded', ()=>{
  fetch('http://localhost:3000/playlists/')
  .then(res => res.json())
  .then(playlists => {
    renderPlaylists(playlists)
  })
})
  // debugger


function renderPlaylists(playlists) {
    playlists.forEach(playlist => {
      playlistInfo(playlist)
    })
}

function playlistInfo(playlist) {
  let playlistDiv = document.querySelector('.playlist')
  const headerTag = document.createElement('h2')
  const imgTag = document.createElement('img')

  headerTag.innerText = `${playlist.name}`
  headerTag.classList.add('card')
  imgTag.src=`${playlist.source}`
  imgTag.classList.add('card')

  playlistDiv.appendChild(headerTag)
  playlistDiv.appendChild(imgTag)
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
