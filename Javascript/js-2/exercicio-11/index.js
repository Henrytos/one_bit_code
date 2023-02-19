const q = '\n'
function addPlayer() {

  const position = document.getElementById('position').value
  const name = document.getElementById('name').value
  const number = document.getElementById('number').value

  const confirmation = confirm('voce deseja escalar o ' + name + q
    + 'como: ' + position + q +
    'camisa: ' + number)
  if (confirmation) {
    /*mandando para 'ItemList'  com paramentros dos valores dos inputs com seus value*/
    ItemList(name, position, number)
    /*deixando o input vazio */
    document.getElementById('position').value = ''
    document.getElementById('name').value = ''
    document.getElementById('number').value = ''
  }
}
/*adicionando a ul */
function ItemList(name, position, number) {
  const time = document.getElementById('team-list')
  const li = document.createElement('li')
  li.innerText = 'Jogador: ' + name + '(' + number + ') ' + position
  li.id = number
  li.className = 'player'
  time.appendChild(li)
}
function removePlayer() {
  const number = document.getElementById('numberToRemove').value
  const playerToRemove = document.getElementById(number)

  const confirmation = confirm('Remover o jogador ' + playerToRemove.innerText + '?')

  if (confirmation) {
    document.getElementById('team-list').removeChild(playerToRemove)
    document.getElementById('numberToRemove').value = ''
  }
}