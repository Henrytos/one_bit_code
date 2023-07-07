document.querySelector('form').addEventListener('submit', validateDate)

function validateDate(ev) {
    ev.preventDefault()
    const password = document.getElementById('password')
    const email = document.getElementById('email')
    try {
        validateEmail(email.value)
        validatePassword(password.value)
    }
    catch (err) {
        console.log(err.mensagem)
        alert('email ou senha invalido')
    }
}
function validatePassword(password) {

    if (password.length > 8 && password.match(/[A-Z]/) && password.match(/[a-z]/) && password.match(/[0-9]/) &&
        password.match(/\W/)) {
        console.log(password)
        alert('login Valido')
    }
    else {
        throw new Error('senha invalido 404')
    }
}

function validateEmail(email) {
    const verification = /([a-zA-Z0-9]){2,}@([a-zA-Z0-9]){2,}\.([a-zA-Z0-9]){2,}/g
    const emailValido = verification.test(email)
    if (emailValido) {
        console.log('Email Valido')
    }
    else {
        throw new Error('Email invalido 404')

    }

}