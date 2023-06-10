// const book = {
//     title: "Eragon",
//     pages: 468,
//     published: true,
//     inStock: 20,
//     tags: ["fantasy", "adventure", "medieval"],
//     author: {
//         name: "Christopher Paolini"
//     },
//     addInstock(quanty) {
//         this.inStock += quanty
//     }
// }


function Book(title, pages, tags, author) {
    this.title = title
    this.pages = pages
    this.tags = tags
    this.author = author
    this.published = false
    this.inStock = 0
    this.addInstock = function (quanty) {
        this.inStock += quanty
    }
    this.setpublished = function (public) {
        this.published = public
    }
    this.save = () => { }
}
const tags = ['comedia', 'estudantil']
const author = { name: "sochiro YAMAMOTO" }
const manga = new Book("tagaki", 155, tags, author)

console.log(manga)

manga.setpublished(true)
manga.addInstock(11)

console.log(manga)

const mangavl2 = new Book("JOJO", 300, ['comedia', 'aventura', 'shounei'], 'akari')
console.log(mangavl2)