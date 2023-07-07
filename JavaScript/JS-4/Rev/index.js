const book = {
    title: "Eragon",
    pages: 468,
    published: true,
    inStock: 20,
    tags: ["fantasy", "adventure", "medieval"],
    author: {
        name: "Christopher Paolini"
    },
    addInstock(quanty) {
        this.inStock += quanty
    }
}
console.log(book)
book.addInstock(50)

book.save = function () { }
// book.save = () => { }
console.log(book)