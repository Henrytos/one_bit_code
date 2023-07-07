/*Criar */
function addContact() {
    const section = document.getElementById('contacts-list')

    const h3 = document.createElement('h3')
    h3.innerText = 'Novo contato'

    const ul = document.createElement('ul')
    /*NOME */
    const newLiName = document.createElement('li')
    newLiName.innerText = 'Nome: '

    const input = document.createElement('input')
    input.type = 'text'
    input.id = 'input'
    input.name = 'input'
    newLiName.appendChild(input)
    ul.appendChild(newLiName)
    /*TELEFONE */
    const newLiPhone = document.createElement('li')
    newLiPhone.innerText = 'Telefone: '

    const inputPhone = document.createElement('input')
    inputPhone.type = 'text'
    inputPhone.id = 'input'
    inputPhone.name = 'input'

    newLiPhone.appendChild(inputPhone)
    ul.appendChild(newLiPhone)
    /*ENDEREÇO */

    const newLiAddress = document.createElement('li')
    newLiAddress.innerText = 'Endereço:'

    const inputAddress= document.createElement('input')
    inputAddress.type= 'text'
    inputAddress.id= 'input'
    
    newLiAddress.appendChild(inputAddress)
    ul.appendChild(newLiAddress)

        section.append(h3, ul)

}
/*Remover */
function removeContact() {
    const section = document.getElementById('contacts-list')
    const h3 = document.querySelectorAll('h3')
    const ul = document.querySelectorAll('ul')

    section.removeChild(h3[h3.length-1])
    section.removeChild(ul[ul.length-1])
    
}