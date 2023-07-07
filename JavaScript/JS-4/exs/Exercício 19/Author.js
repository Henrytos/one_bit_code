const Post = require("./Post")

class Author {
    constructor(name) {
        this.name = name
        this.post = []
    }
    addPost(title, content) {
        const post = new Post(this.name, title, content)
        this.post.push(post)
        return post
    }

}
module.exports = Author