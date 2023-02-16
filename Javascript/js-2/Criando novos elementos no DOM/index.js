function addInput(){
    const ul = document.getElementById('inputs')

    //criando li
    const newLi= document.createElement('li')
    newLi.className = 'list-item'
    newLi.innerText = 'novo input:'
    newLi.style = 'color:blue'
    
    //criando input
    const newInput = document.createElement('input')
    newInput.type = 'text'
    newInput.name = 'input'

   //aninhando os documentos
    ul.appendChild(newLi)
    newLi.appendChild(newInput)
  
}