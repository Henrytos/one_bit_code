class Cout {
    #money
    #nameUser
    constructor() {
        this.#money = 100.99 * 100 //1009.900 
    }
    get money() {
        return this.#money / 100
    }
    get nameUser() {
        return this.#nameUser
    }
    set addMoney(quanty) {
        this.#money += quanty * 100
    }
    set nameUser(nameUser) {
        this.#nameUser = nameUser
    }


}


const myCout = new Cout
console.log(myCout.money)
myCout.addMoney = 100
myCout.nameUser = 'henry '
console.log(myCout.money)

console.log(myCout.nameUser)
console.log(myCout.nameUser += "franz")
