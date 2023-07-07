const Character = require('./Character.js')
const Mage = require('./Mage.js')
const Thief = require('./Thief.js')
const Warrior = require('./Warrior.js')

const human = new Character('henry', 80, 100, 20)
const mago = new Mage('guilherme', 50, 10, 20, 50)
const robimHod = new Thief('arthur', 50, 20, 10)
const leonidas = new Warrior('iano', 60, 40, 10, 20)

console.table({ human, mago, robimHod, leonidas })
leonidas.getPosition('defense')
leonidas.attack(human)





