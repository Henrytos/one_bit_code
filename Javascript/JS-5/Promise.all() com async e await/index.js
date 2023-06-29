async function awaitTime(seconds) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, seconds * 1000)
    })
}

const numbers = [2, 3, 11, 55, 231]


async function execute() {
    console.time('map')
    const squares = await Promise.all(numbers.map(async (number) => {
        await awaitTime(2)
        return number * number
    }))

    console.log(squares)
    console.timeEnd('map')

}
execute()