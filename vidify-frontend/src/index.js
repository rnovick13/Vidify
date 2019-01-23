document.addEventListener('DOMContentLoaded', ()=>{
  fetch('http://localhost:3000/playlists/')
  .then(res => res.json())
  .then(data => {
    renderPlaylists(data)
  })
})

function renderPlaylists(data) {
  let headerTag = document.querySelector('#name')
  let imgTag = document.querySelector('img')
  // playlist.forEach(playlist => {renderPlaylist(playlist)})
  data.forEach(data => {
    renderPlaylist(data)
  })
  // debugger

}

function renderPlaylist(data) {

  let ul = document.querySelector("all")
  let li = document.createElement("li")
  li.innerText = `${data}`
  ul.appendChild(li)
  headerTag.innerText = `${data.name}`
  headerTag.classList.add('playlist')
  imgTag.src=`${data.source}`
}

//need to add forEach watch pokemon

//create card div that will format each playlist - pokemon teams lab
//appendchild to make it show on the DOM
//

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
