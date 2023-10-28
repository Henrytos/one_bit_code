const fs = require("fs");

//criar
fs.writeFile("text.txt", "hello world node", (err) => {
  console.log(err);
});

//adicionar
fs.appendFile("text.txt", "hello world node", (err) => {
  console.log(err);
});

//renomear
fs.rename("text.txt", "text2.txt", (err) => {
  console.log(err);
});

//apagar
fs.unlink("text2.txt", (err) => {
  console.log(err);
});

//diretorio
console.log(__dirname);
