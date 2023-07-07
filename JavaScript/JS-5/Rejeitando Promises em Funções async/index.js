async function asyncSum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject('Invalid number asyncSum')
    }
    else {
        return Promise.resolve(a + b)
    }
}

async function asyncSubtract(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject('Invalid number asyncSubtract')
    } else {
        return Promise.resolve(a - b)
    }
}

const sumResult = asyncSum(50, 33)
const subtractResult = asyncSubtract(50, 33)

Promise.all([sumResult, subtractResult]).then(results => {
    console.log(results)
}).catch(err => console.log(err))

const numbers = [4, 9, 5, 13, 77]

async function asyncSquare(x) {
    if (typeof x !== 'number') {
        return Promise.reject('Invalid number asyncSquare')
    } else {
        return Promise.resolve(x * x)
    }
}

Promise.all(numbers.map(number => asyncSquare(number))).then(squares => {
    console.log(squares)
}).catch(err => console.log(err))

async function asyncSumNumber(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject('Invalid number')
    }
    else { return Promise.resolve(a + b) }
}
asyncSumNumber(1, 1).then(result => console.log(`A soma é ${result}`)).catch(err => {
    console.log(err)
})