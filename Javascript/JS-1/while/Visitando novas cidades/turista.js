const turista=prompt("Qual seu Nome?")
let pergunta=prompt("Voce ja vistou alguma cidade?(sim ou não)")
let quantidade=0
let cidade
let cidades=""

while(pergunta == "sim"){
  cidade=prompt("Qual nome da cidade?")
  cidades+= "\n"+cidade
  pergunta=prompt("Ja visitou outra cidade")
  quantidade+=1
  if(pergunta ==="não"){
    break
  }
} 
alert(
  "Nome: "+ turista +
  "\nQuantidade de cidads visitadas: "+quantidade+
  "\nNome das cidades: "+cidades
)