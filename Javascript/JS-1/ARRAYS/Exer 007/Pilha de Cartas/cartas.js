let novaCarta=""
let op=""
let baralho= ["espadas(♠)", "paus(♣)", "copas(♥)" , "ouro(♦)","espadas(♠)", "paus(♣)", "copas(♥)" , "ouro(♦)"]
let option=[
"1 - Adicionar uma carta"+
"\n2 - Puxar uma carta"+
"\n3 - SAIR"
]
let lista=""
do{
for(let i=0;i<baralho.length;i++)
{
   lista+=(i+1)+ " º "+ baralho[i]+"\n"
}
op=prompt("cartas:\n"+lista+
       "\nOPÇÕES:\n"+option)
switch(op){
  case "1":
     novaCarta=prompt("Qual Nome DA NOVA CARTA")
   baralho.unshift(novaCarta)
  break
  case "2":
   if(baralho.length>0){let cartaRetirada=baralho.shift()
   alert("A carta "+cartaRetirada +" Foi retirado")}
   else{alert("Não exite mais cartas")}
  break
  case "3":alert("O Programa sera encerrado")
    break
  default: alert("Voce não selecionou nemnhuma das nossas opções")
}
lista=""
}
while(op!=="3")
