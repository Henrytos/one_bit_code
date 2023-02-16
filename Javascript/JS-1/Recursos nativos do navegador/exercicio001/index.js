let nome=prompt("Qual sue nome")
let seg_nome=" "
seg_nome+=prompt("Sobrenome?")
let campo_de_estudo=prompt("Campo de Estudo?")
let ano_de_nascimento=prompt("Ano de nascimento")
console.log("Nome completo: "+(nome+=seg_nome))
console.log("Seu campo de estudo é: "+campo_de_estudo)
let ano=parseFloat(ano_de_nascimento)
console.log("Sua idade é: "+(2023 - ano))