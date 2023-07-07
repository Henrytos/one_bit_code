

    let option 
    do{

   option = prompt("Escolha uma opção:"+"\na)" +"\nb)" +"\nc)" +"\nd)" +"\ne)Encerrar")

  switch (option) {
    
    case "a": alert("A opção escolhida é : "+option)
    break
 
    case "b": alert("A opção escolhida é : "+option)
    break

    case "c": alert("A opção escolhida é : "+option)
    break


    case "d": alert("A opção escolhida é : "+option)
    break


    case "e":
      alert("O sistema será encerrado!")
    break
  }

}
while(option !== "e")