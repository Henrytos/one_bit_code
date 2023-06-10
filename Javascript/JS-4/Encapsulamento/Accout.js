class Accout {
    #password
    #balence = 0

    constructor(user) {
        this.email = user.email
        this.#password = user.password
    }
    getBalance(email, password) {
        if (this.#verefictionUser(email, password)) {
            return `seu saldo é ${this.#balence}`
        }
        else {
            return null
        }
    }
    serBalence(email, password, money) {
        if (this.#verefictionUser(email, password)) {
            this.#balence += money
            return `seu saldo é ${this.#balence}`
        }
        else {
            return null
        }
    }
    #verefictionUser(email, password) {
        return this.email == email && this.#password == password
    }
}

const user = {
    email: "henry@gmail.com",
    password: "12345678"
}

const myAccout = new Accout(user)

console.log(myAccout)
console.log(myAccout.getBalance("henry@gmail.com", "12345678"))



myAccout.serBalence("henry@gmail.com", "12345678", 110)
console.log(myAccout.getBalance("henry@gmail.com", "12345678"))
