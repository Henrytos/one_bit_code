
let metros=parsefloat(prompt("Qunatos metros?"))
const resultado=prompt("Escolha uma alternativa:"+
"\na) milímetro (mm)"+
"\nb) centímetro (cm)"+
"\nc) decímetro (dm)"+
"\nd) decâmetro (dam)"+
"\ne) hectômetro (hm)"+
"\nf) quilômetro (km)"
)
switch (resultado){
  case "a":
    alert( metros+(" Metro(s) equivale a: ")+ (metros*=1000) +" milímetro(s)")
    break
  case "b":
    alert( metros+(" Metro(s) equivale a: ")+ (metros*=100) +" centímetro(s)")
    break
  case "c":
    alert( metros+(" Metro(s) equivale a: ")+ (metros*=10) +" decimetro(s)")
    break
  case "d":
    alert( metros+(" Metro(s) equivale a: ")+ (metros/=10) +" decametro(s)")
    break
  case "e":
    alert( metros+(" Metro(s) equivale a: ")+ (metros/=100) +" hectometro(s)")
    break
  case "f":
    alert( metros+(" Metro(s) equivale a: ")+ (metros/=1000) +" quilômetro(s)")
    break
        
  default:
    alert("Opção inválida")
  }