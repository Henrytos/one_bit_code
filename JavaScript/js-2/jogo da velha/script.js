const game = ['', '', '', '', '', '', '', '', '']
const turnPlayer = document.getElementById('turn')
let turn = 0
let ponitPlayerOne = 0
let ponitPlayerTwo = 0
let player1 = 'X'
let player2 = 'O'
const cell = document.querySelectorAll('.cell')
cell.forEach(function (element) {
    element.addEventListener('click', playGame)

})
function playGame(ev) {
    for (let index = 0; index <= 8; index++) {
        if (game[index] === 'x' || game[index] === 'o') {
            turn++
        }
    }
    if (turn % 2 === 0) {
        turnPlayer.innerText = 'é vez do jogador(a):' + player2
        let btnX = ev.currentTarget
        if (btnX.innerText === '') {
            btnX.innerText = 'x'
            game.splice(btnX.id, 1, 'x')
            if ((game[0] == 'x' && game[1] == 'x' && game[2] == 'x') ||
                (game[3] == 'x' && game[4] == 'x' && game[5] == 'x') ||
                (game[6] == 'x' && game[7] == 'x' && game[8] == 'x') ||
                (game[0] == 'x' && game[3] == 'x' && game[6] == 'x') ||
                (game[1] == 'x' && game[4] == 'x' && game[7] == 'x') ||
                (game[2] == 'x' && game[5] == 'x' && game[8] == 'x') ||
                (game[2] == 'x' && game[4] == 'x' && game[6] == 'x') ||
                (game[0] == 'x' && game[4] == 'x' && game[8] == 'x')
            ) {
                alert('Jogador(a) ' + player1 + ' Venceu')
                turn = 0
                ponitPlayerOne++
                placar()
                removeS()

            }
            else if (turn == 8) {
                alert('empate')
                turn = 0
                removeS()
            }
        }
    }

    else {

        turnPlayer.innerText = 'é vez do jogador(a):' + player1
        let btnO = ev.currentTarget
        if (btnO.innerText === '') {
            btnO.innerText = 'o'
            game.splice(btnO.id, 1, 'o')
            if ((game[0] == 'o' && game[1] == 'o' && game[2] == 'o') ||
                (game[3] == 'o' && game[4] == 'o' && game[5] == 'o') ||
                (game[6] == 'o' && game[7] == 'o' && game[8] == 'o') ||
                (game[0] == 'o' && game[3] == 'o' && game[6] == 'o') ||
                (game[1] == 'o' && game[4] == 'o' && game[7] == 'o') ||
                (game[2] == 'o' && game[5] == 'o' && game[8] == 'o') ||
                (game[2] == 'o' && game[4] == 'o' && game[6] == 'o') ||
                (game[0] == 'o' && game[4] == 'o' && game[8] == 'o')
            ) {
                alert('Jogador(a) ' + player2 + ' Venceu')
                ponitPlayerTwo++
                placar()
                removeS()

            }
        }
        turn = 0
    }

}

function removeS() {
    cell.forEach(function (element) {
        element.innerText = ''

    })
    for (let index = 0; index < game.length; index++) {
        game[index] = ''
    }
    turnPlayer.innerText = 'é vez do jogador(a):' + player1
}
function addPlayer(ev) {
    player1 = document.getElementById('player1').value
    player2 = document.getElementById('player2').value
    const camp = document.getElementById('players')
    const span = document.getElementById('span')
    span.remove()
    // O nome do jogador(a) da vez deve ser mostrado na tela e alterado a medida que os turnos vão se alternando;
    const h2 = document.createElement('h2')
    h2.innerText = player1 + ' X ' + player2
    camp.appendChild(h2)
    turnPlayer.innerText = 'é vez do jogador(a)' + player1
    return

}
function placar() {
    let h2 = document.querySelector('h2')
    h2.innerText = player1 + ' [' + ponitPlayerOne + ']' + ' X ' + '[' + ponitPlayerTwo + '] ' + player2
}
document.getElementById('btn').addEventListener('click', addPlayer)

document.getElementById('reset').addEventListener('click', removeS)