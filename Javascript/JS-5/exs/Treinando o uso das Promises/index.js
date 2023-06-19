function calculeteImc(weight, height) {
    return new Promise((resolve, reject) => {
        console.log(`--------------Iniciando promise--------------`)
        if (typeof weight !== 'number' || typeof height !== 'number') {
            reject(`peso ou altura invalido`)
        }
        else {
            resolve({ weight, height })
        }
    })
}

function imc(weight, height) {
    return new Promise((resolve) => {
        console.log(`Iniciando calculo`)
        let imc = Math.round(weight / (height * height))
        resolve(imc)
    })
}
function tableImcPerson(imcPerson) {
    return new Promise((resolve) => {
        if (imcPerson <= 18.5) {
            resolve(`Você se emcaixa em Magreza`)
        }
        else if (imcPerson <= 24.5) {
            resolve(`Você se emcaixa em Normal`)
        }
        else if (imcPerson <= 29.9) {
            resolve(`Você se emcaixa em Sobrepeso`)
        }
        else if (imcPerson <= 39.9) {
            resolve(`Você se emcaixa em Obesidade`)
        }
        else {
            resolve(`Você se emcaixa em Obesidade Grave`)
        }
    })
}
calculeteImc(85, 1.8)
    .then(({ weight, height }) => {
        let imcPerson = 0
        imc(weight, height)
            .then((result => {
                setTimeout(() => {
                    console.log(`O seu imc é: ${result}`)
                    imcPerson = result
                }, 1000 * 1)
            }))
        setTimeout(() => tableImcPerson(imcPerson).then((result) => console.log(result)), 1000 * 2)
    })
    .catch((err) => console.log(`ocorreu um erro ele foi: ${err}`))
    .finally(() => setTimeout(() => console.log('--------------promisse finalizada--------------'), 1000 * 3))


