function asyncSum(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject('arguments must be of type number')
        } else {
            resolve(a + b)
        }
    })
}

function asyncSubtract(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject('arguments must be of type number')
        } else {
            resolve(a - b)
        }
    })
}

const sumResult = asyncSum(55, 33)
const subtractResult = asyncSubtract(55, 33)

Promise.all([subtractResult, sumResult]).then(result => {
    console.log(result)
}).catch(err => {
    console.log(err)
})



const numbers = [11, 22, 32, 12, 32]

function asyncSquare(x) {
    return new Promise((resolve, reject) => {
        if (typeof x !== 'number') {
            reject("Argumento não é um numero")
        }
        else {
            resolve(x * x)
        }
    })
}


Promise.all(numbers.map(num => asyncSquare(num))).then(squares => {
    console.log(squares)
}).catch(err => {
    console.log(err)
})