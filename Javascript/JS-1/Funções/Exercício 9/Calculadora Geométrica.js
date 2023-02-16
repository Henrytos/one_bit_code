let opcao=""


function triangulo() {
  const base = parseFloat(prompt("Informe a base do triângulo:"))
  const altura = parseFloat(prompt("Informe a altura do triângulo:"))
  return base * altura / 2
}
function retangulo() {
  const base = parseFloat(prompt("Informe a base do Retangulo:"))
  const altura = parseFloat(prompt("Informe a altura do Retangulo:"))
  return base * altura
}
function quadrado() {
  const lado= parseFloat(prompt("Qual tamanho do lado:"))
  return lado * lado
}
function trapezio() {
  const baseMaior=parseFloat(prompt("Qual tamanho da Base Maior:"))
  const baseMenor=parseFloat(prompt("Qual tamanho da Base Menor:"))
  const altura=parseFloat(prompt("Qual é Altura"))
  return (baseMaior + baseMenor) * altura / 2
}
function pi() {
  const raio=parseFloat(prompt("Qual tamanho Raio:"))
  return 3.14 * raio * raio
}
function menu ()
{
  return  prompt(
    "Bem vido a sua Calculadora Geométrica" +
      "\n1-área do triângulo: " +
      "\n2-área do retângulo:" +
      "\n3-área do quadrado: " +
      "\n4-área do trapézio: " +
      "\n5-área do círculo: " +
      "\n6-SAIR"
  )
}
do {
  opcao = menu()
  let resultado = ""
  switch (opcao) {
    case "1": resultado=triangulo()
      break
    case "2": resultado=retangulo()
      break
    case "3": resultado=quadrado()
      break
    case "4": resultado=trapezio()
      break
    case "5": resultado=pi()
      break
    case "6":alert("Programa incerrando...")
      break
      default:alert("Nemnhuma das opções escolhidas")
  }
  if(opcao!=="6"){
  alert("Área = "+resultado)
}
} while (opcao !== "6")
