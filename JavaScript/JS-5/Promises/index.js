const p = new Promise((resolve) => {
    console.log('executando propmise')
    setTimeout(() => {
        console.log('resolvendo promise')
        resolve(true)
    }, 1000 * 2)
})


console.log(p)
setTimeout(() => {
    console.log(p)
}, 1000 * 3)