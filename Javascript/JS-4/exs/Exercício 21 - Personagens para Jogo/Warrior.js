const Character = require('./Character.js')


class Warrior extends Character {
    constructor(name, life, atk, def, shieldPts, Position) {
        super(name, life, atk, def)
        this.shieldPts = shieldPts ?? 0
    }
    getPosition(positionFigth) {
        switch (positionFigth) {
            case "attack":
                if (this.Position == "defense") {
                    this.Position = positionFigth
                    this.def -= this.shieldPts

                }
                this.Position = positionFigth
                break;
            case "defense":
                this.Position = positionFigth
                this.def += this.shieldPts
                break;
            default:
                break;
        }
    }
    attack(enemy) {
        if (this.Position == "attack") {
            super.attack(enemy)
        }
        else {
            console.log(`para atacar o ${enemy.name} coloque posição do ${this.name} em ataque`)
        }
    }

}
module.exports = Warrior