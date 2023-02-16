const veiculo1=prompt("Informe o nome do Primeiro veiculo:")
const velocidade1=prompt("informe velocidade do Primeiro veiculo:")

const veiculo2=prompt("Informe o nome do Segundo veiculo:")
const velocidade2=prompt("informe velocidade do Segundo veiculo:")

if(velocidade1>velocidade2){
  alert(veiculo1 + " é mais rapido que: "+veiculo2)
}
else if(velocidade2>velocidade1){
  alert(veiculo2+ " é mais rapido que: " + veiculo1)
}
else{
  alert(veiculo1 +" e "+ veiculo2 +" possuem a mesma velocidade")
}