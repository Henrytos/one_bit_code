async function awaitNumber(seconds) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, seconds * 1000)
    })
}



async function execute(...numbers) {
    console.time('map')
    const squares = await Promise.all(numbers.map(async number => {
        await awaitNumber(2)
        return number * number
    }))
    console.log(squares)
    console.timeEnd('map')


}
execute(1, 2, 3, 4)
