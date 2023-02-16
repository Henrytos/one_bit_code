// O parâmetro é a entrada da função.

// Ele é como uma variável que fica disponível dentro da função
// mas que é informada na hora de chamar a função
function dobro(x) {
  console.log("O dobre de " + x + " é " + (x * 2))
}
dobro(5)
dobro(7)
// Mas podemos declarar um valor padrão para um parãmetro, assim, 
// se ele não for informado, o valor padrão será usado no lugar do undefined
function dizerOla(nome = "mundo") {
  console.log("Olá, " + nome + "!")
}
dizerOla("Isaac")
dizerOla()

// Uma função pode ter quantos parâmetros quisermos, basta separaá-los por vírgula
function soma(a, b) {
  console.log(a + b)
}
soma(1, 1)
soma(34, 5)
function criarUsuario(nome,email,senha,tipo="Admin"){
  const user = {
    nome,
    email,
    senha,
    tipo
  }
  console.log(user)
}
function novoUsuario(nome,email,senha,tipo="Admin"){
  const user = {
    nome,
    email,
    senha,
    tipo
  }
  console.log(user)
}
criarUsuario("Henry","henry@gmail.com",1234,)
novoUsuario("Henry","henry@gmail.com",1234,)

function muitosParametros(nome,telefone,endereco,aniversario,email,senha){
  ///
}
function objetosComoParametro(usuario){
  usuario.nome
  usuario.email
  console.log(usuario)
}
muitosParametros("nome","telefone","endereço","anivesario","email","senha")

const dadosusuario={
  nome:"henry",
  email:"franz@gmail.com",
  telefone:"1232132131",
}
objetosComoParametro(dadosusuario)