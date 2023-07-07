class Product {
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }
    addToStock(add) {
        this.inStock += add
    }
    calculeteDiscount(discountPercentage) {
        this.price = this.price - ((this.price / 100) * discountPercentage)
    }
}

const roupa = new Product('blusa', 'uma blusa de frio', 10)
console.log(roupa)

roupa.addToStock(10)

roupa.calculeteDiscount(13.5)

console.log(roupa)