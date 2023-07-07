let novoPaciente=""
let op=""
let paciente= ["Henry","Nathalia","Mariana"]
let option=[
"1 - Novo Paciente"+
"\n2 - Consultar paciente"+
"\n3 - SAIR"
]
let lista=""
do{
for(let i=0;i<paciente.length;i++){
   lista+=(i+1)+ " º "+ paciente[i]+"\n"
}
op=prompt("PACIENTES:\n"+lista+
       "OPÇÕES:\n"+option)
switch(op){
  case "1":
     novoPaciente=prompt("Qual Nome do Novo Paciente?")
   paciente.push(novoPaciente)
  break
  case "2":
   if(paciente.length>0){let pacienteAtendido=paciente.shift()
   alert("O paciente "+pacienteAtendido +" Foi atendido")}
   else{alert("Não exite mais pacientes")}
  break
  case "3":alert("O Programa sera encerrado")
    break
  default: alert("Voce não selecionou nemnhuma das nossas opções")
}
lista=""
}
while(op!=="3")
