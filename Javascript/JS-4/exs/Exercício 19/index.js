const Author = require("./Author");

const john = new Author("John Doe")

const post = john.addPost("Título do Post", "Lorem ipsum dolor sic amet ...")

post.addComent("Isaac", "Muito bom!")
post.addComent("Lucas", "Achei interessante.")

console.log(john)
console.log(post)