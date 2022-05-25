let listasEitems = document.querySelectorAll('ul li')

let numeroDeItems = listasEitems.length

let numDeItens = 12

let lista1 = document.querySelectorAll('#lista1 li')
let lista2 = document.querySelectorAll('#lista2 li')

let numDelista = document.querySelectorAll('.numDelista')

numDelista[0].textContent = lista1.length
numDelista[1].textContent = lista2.length

function show(indice, indicelista) {
  let n = indice
  numDeItens = numDeItens + indice

  let listaUl = document.querySelector('#lista' + indicelista)
  
  let mover = 300
  let posicaoXDireita = mover
  let posicaoXEsquerda = -mover

  if (indice == +1) {
    listaUl.scrollBy(posicaoXDireita, 0)
  }
  if (indice == -1) {
    listaUl.scrollBy(posicaoXEsquerda, 0)
  }
}



