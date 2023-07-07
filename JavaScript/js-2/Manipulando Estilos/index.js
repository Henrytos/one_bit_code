// Manipulando estilos diretamente pela propriedade style
function useLightTheme() {
  document.body.style.color = 'black'
  document.body.style.backgroundColor = 'white'
}

function useDarkTheme() {
  document.body.style.color = 'white'
  document.body.style.backgroundColor = 'black'
}

// Manipulando estilos através das classes utilizadas pelo CSS
function switchTheme() {
  document.body.classList.toggle('is-light')
  document.body.classList.toggle('is-dark')
}

// Adicionando os eventos
document.getElementById('lightBtn').addEventListener('click', useLightTheme)
document.getElementById('darkBtn').addEventListener('click', useDarkTheme)
document.getElementById('switchBtn').addEventListener('click', switchTheme)