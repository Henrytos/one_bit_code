const Character = require('./Character.js')
class Thief extends Character {
    attack(enemy) {
        console.log(`O ${enemy.name} tomou ${(this.atk - enemy.def) * 2} de Dano `)
        enemy.life -= (this.atk - enemy.def) * 2
    }
}
module.exports = Thief

