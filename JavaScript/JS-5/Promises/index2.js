const p = new Promise((resolve, reject) => {
    console.log('executando propmise')
    setTimeout(() => {
        if (true) {
            // rejeitando promisse
            reject(false)
        }
        console.log('resolvendo promise')
        resolve(true)
    }, 1000 * 2)
})


console.log(p)
setTimeout(() => {
    console.log(p)
}, 1000 * 3)