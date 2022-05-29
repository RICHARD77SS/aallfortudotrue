let addMusic = document.querySelector('#addMusic');
let addCapa = document.querySelector('#addCapa');
let addMusicName = document.querySelector('#addMusicName');
let addArtistName = document.querySelector('#addArtistName');
let btnAdicionar = document.querySelector('#btnAdicionar');


const music = addMusic.value;
const capa = addCapa.value;
const musicName = addMusicName.value;
const artistName = addArtistName.value;

const adicionar = {
  title: musicName,
  artistName: artistName,
  capa: capa,
  file: music,
}

btnAdicionar.onclick = () => adicionarMusica();

function adicionarMusica() {
  if (music == '' && musicName == '') {
    console.log('Preencha todos os campos');
  } else {

    alert('Música adicionada com sucesso');
  }
};

