import './style/index.css'

document.getElementById('btn').addEventListener('click', ev => {
    ev.preventDefault();
    let peso = parseFloat(document.getElementById('peso').value)
    let altura = parseFloat(document.getElementById('altura').value)
    let imc = peso / (altura * altura)
    document.getElementById('peso').value = ""
    document.getElementById('altura').value = ""

    if (imc > 1) {
        render(imc)
    }

})

function section_Imc(title, subTitle, img, text) {
    if (document.querySelector("section")) {
        document.querySelector("section").remove()
        section_Imc(title, subTitle, img, text)
    }
    else {
        const section = document.createElement("section")
        section.id = "imc"
        const h3 = document.createElement("h3")
        h3.id = "title_imc"
        h3.innerText = title
        const h4 = document.createElement("h4")
        h4.id = "title_imc"
        h4.innerText = subTitle
        const imagem = document.createElement("img")
        imagem.id = "img"
        imagem.src = img
        const p = document.createElement("p")
        p.id = "text"
        p.innerText = text
        section.append(h3, h4, imagem, p)
        document.querySelector("main").appendChild(section)
    }
}


function render(imc) {
    if (imc < 18.5) { section_Imc('IMC=' + imc, "Abaixo do normal", "https://abeso.org.br/wp-content/uploads/2019/12/imc_06.png.webp", "Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.") }
    else if (imc < 24.9) { section_Imc('IMC=' + imc, "Normal", "https://abeso.org.br/wp-content/uploads/2019/12/imc_05.png.webp", "Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.") }
    else if (imc < 29.9) { section_Imc('IMC=' + imc, "Sobrepeso", "https://abeso.org.br/wp-content/uploads/2019/12/imc_04.png.webp", "Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer.") }
    else if (imc < 34.9) { section_Imc('IMC=' + imc, "Obesidade grau I", "https://abeso.org.br/wp-content/uploads/2019/12/imc_03.png.webp", "Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista.") }
    else if (imc < 39.9) { section_Imc('IMC=' + imc, "Obesidade grau II", "https://abeso.org.br/wp-content/uploads/2019/12/imc_02.png.webp", "Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde.") }
    else { section_Imc('IMC=' + imc, "Obesidade grau III", "https://abeso.org.br/wp-content/uploads/2019/12/imc_01.png.webp", "Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente") }
}