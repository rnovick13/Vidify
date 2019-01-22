document.addEventListener('DOMContentLoaded', ()=>{
  fetch('http://localhost:3000/playlists/')
  .then(res => res.json())
  .then(json => console.log(json));
})
