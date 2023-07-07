const primeioroNome = prompt("Informe o preimeiro nome do recruta:")
const sobreNome = prompt("Informe o sobrenome recruta:")
const campoDeEstudo = prompt("Qual o campo de estudo do recurta?")
const anoDeNascimento = prompt("Qual ano de nascimento do recruta?")

alert(
  "Recruta cadastrado com sucesso!\n"+
  "\nNome completo: " + primeioroNome +" "+ sobreNome+
  "\nCampo de estudo: "+campoDeEstudo+
  "\nIdade: " + (2023 - anoDeNascimento)
)