function register(element){
  
    const passoWord = element.children.password.value
    const passoWordconfirmation = element.children.passwordConfirmation.value
    const username = element.children.username.value
       
    if(passoWord === passoWordconfirmation){
        alert ('o usuario '+ username+' foi cadastrado')
    }
    else{
        alert('senha incorrreta')
        element.children.password.value=''
        element.children.passwordConfirmation.value=''
    }



}