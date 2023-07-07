let velocidade = 80

while(velocidade > 0){
  alert("O carro esta a "+velocidade+ " km/h")
  velocidade-=20
  alert("Diminuido 20km/h")
  if(velocidade === 40){
    break
  }
} 


alert("O carro parou.")