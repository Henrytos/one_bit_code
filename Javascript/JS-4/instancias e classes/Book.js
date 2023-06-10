class Book {
    constructor(title) {
        this.title = title
        this.published = false
    }

    publish() {
        this.published = true
    }
}

const manga = new Book("jojo")
const mangavl1 = new Book("sagaki")

manga.publish()

console.log(manga)
console.log(mangavl1)

console.log(manga, mangavl1 instanceof Array)
