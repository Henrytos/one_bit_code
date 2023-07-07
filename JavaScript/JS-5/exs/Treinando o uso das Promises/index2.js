function calculeteImc(weight, height) {
    return new Promise((resolve, reject) => {
        typeof weight !== 'number' || typeof height !== 'number' ?
            reject(`peso ou altura invalido`) : resolve(Math.round(weight / (height * height)))
    })
}
function ShowImc(weight, height) {
    calculeteImc(weight, height).then((result) => {
        console.log(`IMC da pessoa é ${result}`)
        if (result < 18.5) console.log('Situação: MAGREZA')
        else if (result < 25) console.log('Situação: NORMAL')
        else if (result < 30) console.log('Situação: SOBREPESO')
        else if (result < 40) console.log('Situação: OBESIDADE')
    }).catch(error => console.log(error))
    console.log(`calculando Imc do peso:${weight} e da altura:${height}`)
}
ShowImc(71, 1.74)
ShowImc(48, 1.60)
ShowImc(71, "texto")
ShowImc(82, 1.72)
ShowImc(120, 1.80)


