let dinheiro = prompt("Qual quantidade inicial de dinheiro?")
dinheiro = parseFloat(dinheiro)
let opition =""
do {

  opition=(prompt(
  "Saldo: "+ dinheiro +
  "\nEscolha uma das opções:"+
  "\na-Adicionar"+
  "\nb-Subtrair"+
  "\nc-Encerrar"))

  switch(opition){
  case "a":
   dinheiro += parseFloat((prompt("Quanto vai adicionar:")))
  break
  case "b":
    dinheiro -= parseFloat((prompt("Quanto vai subtrair:")))
  break
  case "c":
    alert("O programa sera encerrado")
  break
  
}
}
while( opition !== "c")