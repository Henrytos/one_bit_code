function register(element) {
  /*passamos o this.parentNode como parametro e para acessar seu 
 elementos filhos precisamos guarda esses valores numa variavel 
 e aplicar o nome do parametro.children.id.value chidren significa elemento fiho
      e depopis referenciamos o id e se precisar um value */
  const username = element.children.username.value;
  const password = element.children.password.value;
  const passwordConfirmation = element.children.passwordConfirmation.value;

  if (password === passwordConfirmation) {
    alert("Usuário " + username + " registrado!");
  } else {
    alert("As senhas não conferem");
  }
}
