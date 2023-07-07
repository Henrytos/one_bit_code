const Character = require('./Character.js')
class Mage extends Character {
    constructor(name, life, atk, def, mage) {
        super(name, life, atk, def)
        this.mage = mage ?? 0
    }
    attack(enemy) {
        console.log(`O ${enemy.name} tomou ${(this.atk - enemy.def) + this.mage} de Dano `)
        enemy.life -= (this.atk - enemy.def) + this.mage
    }
    increaseLife(healedTarget) {
        console.log(`O ${healedTarget.name} foi recuperado ${this.mage * 2} de vida `)
        healedTarget.life += this.mage * 2
    }
}
module.exports = Mage

