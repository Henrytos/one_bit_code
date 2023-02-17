function addInput(){
    const ul = document.getElementById('inputs')
     
    const newLi=document.createElement('li')
    newLi.innerText='Novo input: '
    newLi.className='list-item'

    const newInputs=document.createElement('input')
    newInputs.type= 'text'
    newInputs.name='input'

    newLi.appendChild(newInputs)
    ul.appendChild(newLi)
}