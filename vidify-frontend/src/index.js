document.addEventListener('DOMContentLoaded', ()=>{
  fetch('http://localhost:3000/playlists/')
  .then(res => res.json())
  .then(playlists => {
    renderPlaylists(playlists)
  })
})

function renderPlaylist(name) {

  let ul = document.querySelector("all")
  let li = document.createElemnt("li")
  li.innerText = `${name}`
  ul.appendChild(li)
}

function renderPlaylists(playlists) {
    let headerTag = document.querySelector('#name')
    let imgTag = document.querySelector('img')
    // playlist.forEach(playlist => {renderPlaylist(playlist)})
    playlists.forEach(array => {
      headerTag.innerText = `${array.name}`
      headerTag.classList.add('playlist')
      // debugger
      imgTag.src=`${array.source}`


    })

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
