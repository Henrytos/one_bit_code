function execute() {
    return new Promise((resolve, reject) => {
        console.log('iniciando uma promisse')
        setTimeout(() => {
            console.log('executando uma promisse')
            if (i == 0) { reject(false) }
            else { resolve(true) }
        }, 1000 * 2)


    })
}
let i = 0

execute(i).then((result) => {
    console.log(`a promisse foi resolivia seu resultado: ${result}`)
}).catch((err) => {
    console.log(`a promisse foi rejeitada seu resultado: ${err}`)
}).finally(() => {
    console.log(`a promisse foi finalizada`)
})

setTimeout(() => {
    i = 3
    execute(i).then((result) => {
        console.log(`a promisse foi resolivia seu resultado: ${result}`)
    }).catch((err) => {
        console.log(`a promisse foi rejeitada seu resultado: ${err}`)
    }).finally(() => {
        console.log(`a promisse foi finalizada`)
    })
}, 1000 * 2)
