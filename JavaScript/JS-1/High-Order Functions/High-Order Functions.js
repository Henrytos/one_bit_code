// Funções de Alta-ordem (High-order Functions)
//

function calcular(a, b, operacao) {
    console.log("Realizando uma operação:")
    return operacao(a, b)
}
function soma(c, d) {
    console.log("Realizando uma soma")
    return c + d
}
function subtracao(e, f) {
    console.log("Realizando uma Subtração")
    return e - f
}
function multipli(g, h) {
    console.log("Realizando uma multiplicação")
    return g * h
}

function divisao(i, j) {
    console.log("Realizando uma divisão")
    return i / j
}
console.log(calcular(2, 3, soma))
//isso é uma função anonima com parametro
console.log(calcular(3, 3, function (x, y) {
    console.log("Realizando segunda soma:")
    return x + y
}))
console.log(calcular(10, 4, subtracao))
console.log(calcular(9, 3, multipli))
console.log(calcular(10, 2, divisao))
//Exibindo um array na tela
function exibirElmento(elemento, indice, array) {
    console.log(
        {
            elemento,
            indice,
            array
        }
    )
}
const lista = ["Dean", "Samy", "Bela", "Bob"]

for (let i = 0; i < lista.length; i++) {
    exibirElmento(lista[i], i, lista)
}

// essa forma é antiga agr uma mais nova
console.log("Usando o .forEach")
lista.forEach(exibirElmento)
console.log("Usando função anonima como parametro de um .forEach")
lista.forEach(function (elemento, indice, array) {
    console.log(
        -{
            elemento,
            indice,
            array
        }
    )
})