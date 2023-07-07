const form = document.getElementById('orderForm')
let number = 0
form.addEventListener("submit", function (ev) {
    //previninido conportamento padrão do evento
    ev.preventDefault()
    const name = document.querySelector('input[name="name"]').value
    const address = document.querySelector('input[name="address"]').value
    const breadType = document.querySelector('select[name="breadType"]').value
    const main = document.querySelector('input[name="main"]').value
    const observation = document.querySelector('textarea[name="observations"]').value
    //check box mais complexo por que émultipla escolha por isso usamos o querrySelectoAll para uma interação dos elemnetos escolhido 
    let salad = ''
    document.querySelectorAll("input[name='salad']:checked").forEach(function (element) {
        salad += element.value + '\n'
    })

    //menusinho
    alert(
        "Pedido Realizado!" +
        "\nNome do cliente: " + name +
        "\nEndereço de entrega: " + address +
        "\nTipo de pão: " + breadType +
        "\nRecheio: \n  " + main + "\n" + salad +
        "Observações: " + observation
    )
    // deixando os inputs vazios
    console.log({ name, address, breadType, main, observation })
    console.log(salad)
    document.querySelector('input[name="name"]').value = ''
    document.querySelector('input[name="address"]').value = ''
    document.querySelector('select[name="breadType"]').value = ''
    document.querySelector('input[name="main"]').value = ''
    document.querySelector('textarea[name="observations"]').value = ''
    //criando elemento 
    const section = document.getElementById('items')

    const newul = document.createElement('ul')

    const title = document.createElement('h3')
    title.innerText = 'Pedido #' + number
    const newLi = document.createElement('li')
    newLi.innerText = 'Nome:' + name + '\n' + 'Endereço: ' + address

    newul.append(title, newLi)

    section.appendChild(newul)
    number++
})

const btnremove = document.getElementById('remove')
const section= document.getElementById('items')
const ul = document.getElementsByTagName('ul')

btnremove.addEventListener('click',function(ev){
    ev.preventDefault()
    section.removeChild(ul[ul.length-1])
})
