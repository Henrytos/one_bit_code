async function asyncSum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') return Promise.reject('Not a Number')
    return Promise.resolve(a + b)
}


async function execute(a, b) {

    try {
        const result = await asyncSum(a, b)
        console.log(result)
    }
    catch (err) {
        console.log(err)
    }
}
execute(20, 19)
execute('sifhs', 19)
execute(20, 9)
execute(20, 1)
execute(2, 19)