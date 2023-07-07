const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)
//  adicionar elementos!

// // push final
let tamanho=arr.push("nathalia")
console.log(arr)
console.log(tamanho)
// // unshit começo
tamanho=arr.unshift("Mariana")
console.log(arr)
console.log(tamanho)

// Remover Elementos
// pop final
let ultimoelemento = arr.pop()
console.log(arr)
console.log(ultimoelemento)

//shift começo
let priemiroelemento = arr.shift()
console.log(arr)
console.log(priemiroelemento)


//pesquisando elementos
// includes


console.log(arr.includes("Gandalf"))

//index0f
const indice = arr.indexOf("Gandalf")
console.log(indice)

// cortar 
// slice
const hobbits = arr.slice(0, 4)
const outros=arr.slice (-4)
console.log(arr)
console.log(hobbits)
console.log(outros)

//cocatenar
//concat
const sociedade=hobbits.concat(outros,"Boromir")
console.log(sociedade)

//substuição dos elementos
//splice
const elementosRemovidos = sociedade.splice(indice, 1 , "Barbara")
console.log(sociedade)
console.log(elementosRemovidos)

//interar os elementos dos arrays
for (let indice = 0; indice < sociedade.length;indice++){
  const elemento = sociedade[indice]
  console.log(elemento + " Se encontra na posição: "+ indice )
}
