class Vehicle {
    move() {
        console.log("o veiculo esta se movendo")
    }
}
class Car extends Vehicle {
    move() {
        console.log("O carro está se movendo")
    }
}
class Ship extends Vehicle {
    move() {
        console.log("o navio esta se movendo")
    }
}

class Plane extends Vehicle {
    move(speed) {
        console.log(`o avião esta se movendo em ${speed} km/hr`)
    }
}

const ford = new Car()
const titanic = new Ship()
const aviao069 = new Plane()

// ford.move()
// titanic.move()
// aviao069.move(80)


function move(Vehicle) {
    console.log("o veiculo ira se mover....")
    Vehicle.move()
    console.log('----------------------------')
}

move(ford)
move(titanic)
move(aviao069)
