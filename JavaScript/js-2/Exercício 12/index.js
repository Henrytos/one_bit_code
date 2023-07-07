let number = 0
let dev = []

const ul = document.getElementById('tec-list')

const btn = document.getElementById('addTec')
btn.addEventListener('click', function () {
  const p = document.createElement('p')
  const label = document.createElement('label')
  label.innerText = 'Nome da tecnologia:'
  label.htmlFor = 'input-' + number
  const input = document.createElement('input')
  input.type = 'text'
  input.id = 'input-' + number
  input.name = 'input-' + number

  // radio
  const inputR = document.createElement('input')
  inputR.value = '0-2 years'
  inputR.type = 'radio'
  inputR.id = 'radio1.' + number
  inputR.name = 'radio1' + number
  const labelR = document.createElement('label')
  labelR.htmlFor = 'radio1.' + number
  labelR.innerText = '0-2 anos'

  const inputR2 = document.createElement('input')
  inputR2.value = '3-4 years'
  inputR2.type = 'radio'
  inputR2.id = 'radio2.' + number
  inputR2.name = 'radio1' + number
  const labelR2 = document.createElement('label')
  labelR2.htmlFor = 'radio2.' + number
  labelR2.innerText = '3-4 anos'

  const inputR3 = document.createElement('input')
  inputR3.value = '+5 years'
  inputR3.type = 'radio'
  inputR3.id = 'radio3.' + number
  inputR3.name = 'radio1' + number
  const labelR3 = document.createElement('label')
  labelR3.htmlFor = 'radio3.' + number
  labelR3.innerText = '+5 anos'

  const btnremove = document.createElement('button')
  btnremove.id = 'remove'
  btnremove.innerText = 'Remover'

  p.append(label, input)
  p.append(labelR, inputR)
  p.append(labelR2, inputR2)
  p.append(labelR3, inputR3)
  p.append(btnremove)

  ul.appendChild(p)
  console.log(p.lenght)
  number++

  // adiciona o event listener usando a técnica de delegação de eventos
  ul.addEventListener('click', function (ev) {
    if (ev.target.id === 'remove') {
      ev.target.parentElement.remove()
    }
  })
})
document.getElementById('cadastrar').addEventListener('click', function () {
  const sections = document.querySelectorAll('p')



  sections.forEach(function (section, indice) {
    const p = document.getElementById('input-' + indice)
    const radios = document.querySelectorAll('input[name="radio1' + indice + '"]')
    let nomedev=document.getElementById('name').value
    let radioValue = null
    radios.forEach(function (radio) {
      if (radio.checked) {
        radioValue = radio.value
      }
    })

    if (p.value !== '' && radioValue !== null) {
      const pessoa = {
        nome:nomedev,
        ramo: p.value,
        experiencia: radioValue
      }
      dev.push(pessoa)
    }
    document.getElementById('input-' + indice).value = ''
    document.querySelectorAll('input[name="radio1' + indice + '"]').forEach(function (inputs) {
      inputs.checked = false
    })
  

  })
  document.getElementById('name').value=''
  console.log(dev)
  console.log(sections.length)
})


