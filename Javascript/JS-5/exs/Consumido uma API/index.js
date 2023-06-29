const form = document.querySelector('form')

form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const transactionDate = {
        transaction: document.querySelector('#transaction').value,
        value: document.querySelector('#value').value
    }
    if (transactionDate.transaction !== '' && transactionDate.value !== '') {
        postTransaction(transactionDate)
        form.reset()
    }
    else {
        alert('Prencha o formulario')
    }
})

async function postTransaction(transactionDate) {
    const response = await fetch('http://localhost:3000/finance', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body:
            JSON.stringify(
                transactionDate
            )
    })
    const result = await response.json()
    renderTrasaction(result)
}

function renderTrasaction(result) {
    const card = document.createElement('div')
    card.classList = `list-group list-group-${result.id}`
    card.id = result.id
    const title = document.createElement('h3')
    title.innerText = result.transaction

    const money = document.createElement('p')
    const valueTrasaction = result.value
    money.innerText = formatarNumero(valueTrasaction)
    money.classList = valueTrasaction > 0 ? 'positeve' : 'negative'
    addMoney(valueTrasaction)

    const buttons = document.createElement('span')
    const btnDELETE = document.createElement('span')
    btnDELETE.classList = 'btn btn-delete'
    btnDELETE.innerHTML = '<i class="fa-solid fa-trash" style="color: #ffffff;"></i>'
    btnDELETE.id = result.id
    btnDELETE.addEventListener('click', excluitDELETE)


    const btnPUT = document.createElement('span')
    btnPUT.classList = 'btn btn-put'
    btnPUT.innerHTML = '<i class="fa-solid fa-pencil" style="color: #ffffff;"></i>'
    btnPUT.id = result.id
    btnPUT.addEventListener('click', editPUT)
    money.append(buttons)
    buttons.append(btnDELETE, btnPUT)
    card.append(title, money)
    document.querySelector('section').appendChild(card)

}

async function excluitDELETE() {
    await fetch(`http://localhost:3000/finance/${this.id}`, { method: 'DELETE' })
    location.reload()

}
async function editPUT() {

    let editTransaction = prompt('Qual nome da transação')
    let editValue = prompt('Qual valor')



    await fetch(`http://localhost:3000/finance/${this.id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(
            {
                transaction: editTransaction,
                value: editValue,
                id: this.id
            }
        )
    })
    location.reload()

}
let moneyResult = 0
function addMoney(money) {
    moneyResult += parseFloat(money)
    const saldo = document.getElementById('saldo')
    saldo.innerText = formatarNumero(moneyResult)
    saldo.classList = moneyResult > 0 ? 'positeve' : 'negative'
    situaction(moneyResult > 0)
}

function situaction(stateMoney) {
    const text = document.getElementById('situation')
    if (stateMoney) {
        text.innerText = 'Lucro'
        text.classList.add('positeve')

    } else {
        text.innerText = 'Prejuizo'
        text.classList.add('negative')
    }
}


async function fetchArticles() {
    const articles = await fetch("http://localhost:3000/finance").then(res => res.json())
    articles.forEach(renderTrasaction)
}

document.addEventListener('DOMContentLoaded', () => {
    fetchArticles()
})

function formatarNumero(numero) {

    let numeroString = numero.toString();


    let partes = [];
    while (numeroString.length > 3) {
        partes.unshift(numeroString.slice(-3));
        numeroString = numeroString.slice(0, -3);
    }


    if (numeroString.length > 0) {
        partes.unshift(numeroString);
    }


    return partes.join('.');
}