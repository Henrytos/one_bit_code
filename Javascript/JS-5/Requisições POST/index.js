document.addEventListener('DOMContentLoaded', () => {
    fetchArticles()
})

function renderArticle(articleData) {

    const article = document.createElement('article')
    article.id = `article-${articleData.id}`

    const titleName = articleData.title
    const title = document.createElement('h3')
    title.innerText = titleName
    title.id = `title-${articleData.title}`


    const content = document.createElement('div')
    content.innerText = `Content: ${articleData.content}`
    content.id = `content-${articleData.id}`

    const author = document.createElement('div')
    author.id = `article-${articleData.id}`
    author.innerText = `Author : ${articleData.author}`

    const btnRemove = document.createElement('span')
    btnRemove.innerText = 'excluir'
    btnRemove.classList = 'btn btn-excluir'
    btnRemove.id = `${articleData.id}`
    btnRemove.addEventListener('click', removeArticle)

    const btnEdit = document.createElement('span')
    btnEdit.innerText = 'editar'
    btnEdit.classList = 'btn btn-edit'
    btnEdit.id = `${articleData.id}`
    btnEdit.addEventListener('click', editArticle)

    article.append(title, content, author, btnRemove, btnEdit)
    document.querySelector('#articles').appendChild(article)


}
async function fetchArticles() {
    const articleData = await fetch('http://localhost:3000/articles').then(url => url.json())

    articleData.forEach(renderArticle)
}

// POST
const form = document.querySelector('form')
form.addEventListener('submit', async (ev) => {
    ev.preventDefault()
    const articleData = {
        title: document.querySelector('#title').value,
        content: document.querySelector('#content').value,
        author: document.querySelector('#author').value
    }
    const response = await fetch('http://localhost:3000/articles', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(articleData)
    })

    const savedArticle = await response.json()
    form.reset()
    console.log(savedArticle)
    renderArticle(savedArticle)

})
// DELETE

async function removeArticle() {
    await fetch(`http://localhost:3000/articles/${this.id}`, {
        method: 'DELETE'
    })
    location.reload();
}
async function editArticle() {
    const articleData = []
    articleData.push(prompt('qual ser novo titulo'))
    articleData.push(prompt('qual ser novo conteudo'))
    articleData.push(prompt('qual ser o author'))

    await fetch(`http://localhost:3000/articles/${this.id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            title: articleData[0],
            content: articleData[1],
            author: articleData[2],
            id: this.id
        })
    })


}
