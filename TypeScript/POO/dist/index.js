class Spaceship {
    Pname;
    captain;
    speed;
    set name(name) {
        this.Pname = name;
    }
    get name() {
        return this.Pname;
    }
    constructor(name, captain) {
        this.name = name;
        this.captain = captain;
        this.speed = 0;
    }
    accelerate(rate, time) {
        this.speed = rate * time;
    }
}
class Fighter extends Spaceship {
    weapons;
    constructor(name, captain, weapons) {
        super(name, captain);
        this.weapons = weapons;
    }
    shoot() {
        for (let i = 0; i < this.weapons; i++) {
            console.log("Pew!");
        }
    }
    erase() {
        this.captain = "";
    }
}
let ship = new Fighter("USS Enterprise", "James T. Kirk", 10);
let henry = new Fighter("henry", "isaac", 20);
console.log(henry.name);
henry.name = "Henry franz ramos arcaya";
console.log(henry.name);
