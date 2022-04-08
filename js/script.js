//ativamdo links do menu //

const links = document.querySelectorAll('.header-menu a')

function ativarLink(link) {
  const url = location.href
  const href = link.href
  if (url.includes(href)) {
    link.classList.add('ativo')
  }
}

links.forEach(ativarLink)

// ativando produto //
const paramentros = new URLSearchParams(location.search)

function ativarProduto(paramentro) {
  const elemento = document.getElementById(paramentro)
  if (elemento) {
    elemento.checked = true
  }
}

paramentros.forEach(ativarProduto)

//pergunts freguentes //

const perguntas = document.querySelectorAll('.perguntas button')

function ativarPegurta(event) {
  const pergunta = event.currentTarget
  const controls = pergunta.getAttribute('aria-controls')
  const resposta = document.getElementById(controls)
  resposta.classList.toggle('ativo')
  const ativa = resposta.classList.contains('ativo')
  pergunta.setAttribute('aria-expanded', ativa)
}
function eventoPerguntas(pergunta) {
  pergunta.addEventListener('click', ativarPegurta)
}
perguntas.forEach(eventoPerguntas)

// galeria de bicicleta

const galeria = document.querySelectorAll('.bicicleta-imagens img')
const galeriaContainer = document.querySelector('.bicicleta-imagens')
function trocarImagem(event) {
  const img = event.currentTarget
  const media = matchMedia('(min-width:1000px)').matches
  if (media) {
    galeriaContainer.prepend(img)
  }
}

function eventosGaleria(img) {
  img.addEventListener('click', trocarImagem)
}

galeria.forEach(eventosGaleria)
