async function asyncSum(a, b) {
    return a + b
}

async function asyncSubtract(a, b) {
    return a - b

}

const sumResult = asyncSum(50, 33)
const subtractResult = asyncSubtract(50, 33)

Promise.all([sumResult, subtractResult]).then(results => {
    console.log(results)
})

const numbers = [4, 9, 5, 13, 77]

async function asyncSquare(x) {
    return x * x
}

Promise.all(numbers.map(number => asyncSquare(number))).then(squares => {
    console.log(squares)
})
async function asyncSumNumber(a, b) {
    return a + b
}
asyncSumNumber(1, 2).then(result => console.log(`A soma é ${result}`))