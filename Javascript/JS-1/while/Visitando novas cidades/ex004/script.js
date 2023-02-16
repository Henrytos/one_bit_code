const turista = prompt("Ae turista qual seu nome?")
let cidades = ""
let contagem = 0

let continuar = prompt("Voce já visitou alguma cidade(Sim/Não)")

while(continuar == "Sim" || continuar == "sim" ) {
  let  city = prompt("Qual o nome da cidade visitada? ")
  cidades+= " - "+ city + "\n"
  contagem ++
  continuar = prompt("Voce ja visitou outra cidade: (Sim/Não)")
}
alert(
  "Turista: "+ turista +
  "\nQuantidade visitadadas: "+contagem+
  "\ncidade visitade: \n"+cidades
)