// let Playlist = []

// const getPlaylist = () => JSON.parse(localStorage.getItem('playlistMusic')) ?? []

// const setPlaylist = (Playlist) = localStorage.setItem('playlistMusic', JSON.stringify(Playlist))

// const criarMusica = (file, capa, nomeMusica, nomeArtista, indice) => {
//   const musica = document.createElement('div')
//   musica.classList.add('div__musica')
//   musica.innerHTML = `
//   <div class="desc">
//     <h5 class="musicName">${nomeMusica}</h5>
//     <p class="artistName">${nomeArtista}</p>
//     <img src="${capa}" alt="capa">
//     <audio src="${file}" controls></audio>
//     <input type="button" value="X" data-indice=${indice}>
//   </div>
//   `
//   document.getElementById('playlist').appendChild(musica)
// }

// const limparPlaylist = () => {
//   const playlist = document.getElementById('Playlist')
  
//   while (playlist.firstChild) {
//     playlist.removeChild(playlist.lastChild)
//   }
  
// }

// const atualizar = () => {
//   limparPlaylist()
//   const playlist = getPlaylist()
//   playlist.forEach ((musica, indice ) => criarMusica(musica.file, musica.capa, musica.nomeMusica, musica.nomeArtista, indice))
// }

// const inserirMusica = () => {
//   const file = document.getElementById('addMusic').value
//   const capa = document.getElementById('addCapa').value
//   const nomeMusica = document.getElementById('addMusicName').value
//   const nomeArtista = document.getElementById('addArtistName').value
//   if (file & capa & nomeMusica & nomeArtista !== '') {
//     const playlist = getPlaylist()
//     playlist.push({ 'file': file, 'capa': capa, 'nomeMusica': nomeMusica, 'nomeArtista': nomeArtista })
//     setPlaylist(playlist)
//     atualizar()
//     document.getElementById('addMusic').value = 'ss'
//     document.getrElementById('addCapa').value = 'ss'
//     document.getElementById('addMusicName').value = 'ss'
//     document.getElementById('addArtistName').value = 'ss'
//   } else {
//     alert('Insira os dados corretamente')
//   }
// }

// const removerMusica = (indice) => {
//   const playlist = getPlaylist()
//   playlist.splice(indice, 1)
//   setPlaylist(playlist)
//   atualizar()
// }

// const clickRemoverMusica = (evento) => {
//   const delet = evento.target

//   if (delet.type === 'button') {
//     const indice = elemento.dataset.indice
//     removerItem(indice)
//   } else {
//     alert('Erro ao deletar')
//   }
// }

// document.getElementById('btnAdicionar').addEventListener('click', inserirMusica)
// document.getElementById('playlist').addEventListener('click', clickRemoverMusica)

// atualizar()

