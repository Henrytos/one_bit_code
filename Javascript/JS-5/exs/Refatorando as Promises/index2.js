async function imc(weight, height) {
    if (typeof weight !== 'number' || typeof height !== 'number') {
        return Promise.reject('arguments must be of type number')
    }
    return Promise.resolve(weight / (height * height))
}

async function showImc(weight, height) {
    try {
        console.log(`Calculando o IMC para peso ${weight} e altura ${height}...`)
        const imcPesron = await imc(weight, height)
        console.log(`O resultado do IMC foi de ${imcPesron}.`)
        if (imcPesron < 18.5) console.log('Situação: MAGREZA')
        else if (imcPesron < 25) console.log('Situação: NORMAL')
        else if (imcPesron < 30) console.log('Situação: SOBREPESO')
        else if (imcPesron < 40) console.log('Situação: OBESIDADE')
        else console.log('Situação: OBESIDADE GRAVE')
    }
    catch (err) {
        console.log(err)
    }
}

showImc(71, 1.74)
showImc(48, 1.60)
showImc(71, "texto")
showImc(82, 1.72)
showImc(120, 1.80)


