const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function () {
    input.value = input.value === '' ? 'olá mundo' : ''

    console.log(input.value)
    console.log(input.getAttribute('value'))
})

document.getElementById('type').addEventListener('click', function () {
    // input.type = input.type !== 'date' ? 'date' : 'text'
    input.setAttribute('type', 'radio')
})
document.getElementById('placeholder').addEventListener('click', function () {
    input.placeholder = input.placeholder == 'Digite algo' ? 'Tenta vai' : 'Digite algo'
})
document.getElementById('disable').addEventListener('click', function () {
    input.setAttribute('disabled', !input.disabled)
})
document.getElementById('data').addEventListener('click', function () {
    let data = input.dataset.somethingElse
    console.log("O valor do atributo data-something-else é: " + data)
    data = 'Algum outro valor'
    console.log("O valor do atributo data-something-else agora é: " + data)
})