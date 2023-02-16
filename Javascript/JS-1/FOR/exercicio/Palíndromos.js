let palavra=prompt("Informe a palavra:")
let palavrainversa =""

for(let i=palavra.length-1;i>=0;i--)
{
  palavrainversa+=palavra[i]
}
console.log(palavrainversa)
if(palavrainversa == palavra){
  alert("É UMA PALAVRA PALÍDRAMOS")
}
else{
  alert("Não é uma palavra palídramos "+
        "\nPalavra: "+ palavra+
        "\nPalavras inversa: " + palavrainversa 
  )
}