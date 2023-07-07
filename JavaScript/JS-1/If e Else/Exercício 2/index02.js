/*Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, depois o nome, a quantidade de pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo, e então calcule a quantidade de dano causado baseado nas seguintes regras: 

- Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença entre o ataque e a defesa.
- Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa.
- Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.
*/
var p1=prompt("Nome do Primeiro Personagem?")
var p1A=prompt("poder de Ataque?")
var p2=prompt("Nome do segundo Personagem")
var p2V=prompt("Pontos de vida?")
var p2D=prompt("Pontos de Desfesa")
var resposta=prompt("O Personagem possui um Escudo?sim ou não")
var dano=0
var p1Ataque= parseFloat(p1A)
var p2Defesa= parseFloat(p2D)
var p2Vida= parseFloat(p2V)
if(resposta =="sim"){
  resposta= true
}
else{
  resposta= false
}
if(p1Ataque > p2Defesa &&  resposta == false){
 dano=p1Ataque-p2Defesa
}
else if(p1Ataque > p2Defesa &&  resposta == true){
  dano=(p1Ataque-p2Defesa)/2
 }
 else if(p1Ataque <= p2Defesa ){
  dano=0
 }
 p2Vida-=dano

 alert(
  "Personage: "+p1+
  "\nPoder de ATK: "+p1Ataque +
  "\nDano Aplicado: "+ dano 
 )
 alert(
  "Personagem: "+p2+
  "\nHP: "+p2Vida+
  "\nDefesa: "+p2Defesa
 )