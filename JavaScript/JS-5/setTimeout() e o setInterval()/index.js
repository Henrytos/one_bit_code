console.log('Programa iniciado!')
// console.log('Programa iniciado!')

// const timeoutId = setTimeout(() => {
//     console.log('2 segundos se passaram desde que o programa foi iniciado.')
// }, 2 * 1000)
let seconds = 0
const intervalId = setInterval(() => {
    seconds += 3
    console.log(`se passaram ${seconds}seg desde que o programa foi inicializado`)
    if (seconds >= 12) {
        console.log(`programa finalizado: aos ${seconds}seg`)
        clearTimeout(intervalId)
    }
}, 1000 * 3)