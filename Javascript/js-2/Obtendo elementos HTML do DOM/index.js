function show() {
    //pbetendo elemento com id
    const contactList = document.getElementById('contact-list')
    console.log(contactList)
    //pbetendo elemento com Nome da tag
    const lielements = document.getElementsByTagName('li')
    console.log(lielements)
    //pbetendo elemento com nome da classe
    const contactInputs = document.getElementsByClassName('contact-input')
    console.log(contactInputs)
    //pbetendo elemento com seletor como no css
    //querrySeletorAll ele retorna nodelist parecido com array da pra interar
    const contacts= document.querySelectorAll('#contact-list>li>label')
    console.log(contacts)
    //pbetendo elemento com name mais retorna nodelist com um elemento
    const contact1= document.getElementsByName('contact1')
    console.log(contact1)
    //  se parec com o querySelectorAll só que pega só primeiro filho mais velho
    const firstContacts= document.querySelector('#contact-list>li>label')
    console.log(firstContacts)
}