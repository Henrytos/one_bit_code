class Propetery {
    constructor(area, price) {
        this.area = area
        this.price = price
    }
    getPriceQuadrado() {
        return this.price / this.area
    }
}

class House extends Propetery { }

class Apartament extends Propetery {
    constructor(number, area, price) {
        super(area, price)
        this.number = number
    }
    getPise() {
        return Math.floor(this.number / 10)
    }
}

const house = new Propetery(100, 50000)
const myHouse = new House(50, 20000)
const myApartment = new Apartament(89, 100, 200)
console.log(house)
console.log(house.getPriceQuadrado())
console.log(myHouse)
console.log(myHouse.getPriceQuadrado())
console.log(myApartment)
console.log(myApartment.getPise())