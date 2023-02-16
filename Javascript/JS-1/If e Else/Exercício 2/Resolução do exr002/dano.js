const atacante=prompt("Qual Nome do personagem Atacante?")
const poderDeAtaqu=prompt("Qual poder de Aatque?")
const poderDeAtaque=parseFloat("poderDeAtaqu")
const defensor=prompt("Qual nome do personagem defensor?")
let pontosDeVid=prompt("Quanto pontos de vida?")
let pontosDevida=parseFloat("pontosDeVid")
const poderDeDefes=prompt("Qual é seu poder de defesa?")
const poderDeDefesa=parseFloat("poderDeDefes")
const possuiEscudo= prompt("Ele um escudo? (Sim/Não)")
let danoCausado = 0

if(poderDeAtaque > poderDeDefesa && possuiEscudo === "Não"){

  danoCausado=poderDeAtaque-poderDeDefesa
}
else if(poderDeAtaque > poderDeDefesa && possuiEscudo === "Sim"){

  danoCausado=(poderDeAtaque-poderDeDefesa)/2
}
pontosDevida = pontosDevida-danoCausado

alert(atacante+ "Causou "+danoCausado+ " pontos de dano em " + defensor)

alert( 
  atacante+ 
  "\nPoder de ataque: "+ poderDeAtaque + "\n\n"+
  defensor+ 
  "\nPontos de vida: "+pontosDevida +
  "\nPoder de defesa: "+poderDeDefesa+
   "\nPossui escudo: "+possuiEscudo
)