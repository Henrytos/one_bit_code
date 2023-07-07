const Comment = require("./Comment")

class Post {
    constructor(name, title, content) {
        this.name = name
        this.title = title
        this.content = content
        this.coment = []
    }

    addComent(name, coment) {
        const content = new Comment(name, coment)
        this.coment.push(content)
    }

}

module.exports = Post