class Character {

    constructor(name, life, atk, def) {
        this.name = name
        this.life = life ?? 0
        this.atk = atk ?? 0
        this.def = def ?? 0
    }
    attack(enemy) {
        enemy.life -= this.atk - enemy.def
    }
    getPersonagem() {
        console.table(this)
    }

}
module.exports = Character