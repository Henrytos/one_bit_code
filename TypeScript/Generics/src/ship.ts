interface Ship {
  name: string;
  pilot: string;
}

interface Fighter extends Ship {
  weapons: number;
  shields: number;
}

interface Transport extends Ship {
  capacity: number;
}

interface Speeder extends Ship {
  speed: number;
  acceleration: number;
}

// Se deixássemos sem o tipo Ship desativaríamos
// totalmente o typescript para esse argumento
function cloneShip<Type extends Ship>(
  ship: Type,
  newName: string,
  newPilot: string
): Type {
  const newShip = ship;
  newShip.name = newName;
  newShip.pilot = newPilot;
  return newShip;
}

const falcon: Ship = {
  name: "Millenium Falcon",
  pilot: "Han",
};

const xWing: Fighter = {
  name: "Red Five",
  pilot: "Luke",
  weapons: 4,
  shields: 1,
};

// A cópia funciona, porém a tipagem está incorreta
// pois a ambas é atribuido o tipo Ship
const copy1 = cloneShip(falcon, "Milano", "Peter");
const copy2 = cloneShip(xWing, "Black One", "Poe");

interface EnemyShip {
  name: string
  pilot: string
  flag?: string // A propriedade é opcional para evitar erros
}

// O tipo Ship não estaria correto aqui
const enemyCopy = cloneShip(falcon, 'Enemy', 'Enemy')
// Mas podemos explicitamente passar o tipo para a função
// e agora temos o tipo EnemyShip atribuido corretamente
const enemyCopy2 = cloneShip<EnemyShip>(falcon, 'Enemy', 'Enemy')

// Aqui temos um erro por conta do tipo Ship pq não passamo na chamada da função cloneShip<EnemyShip>() 
//enemyCopy.flag = 'Imperial'
// Já aqui temos a propriedade opcional flag
enemyCopy2.flag = 'Imperial'

// Segue a mesma implementação das funções
// e o mesmo valeria para as interfaces
class Pilot <ShipType> {
  name: string
  ship: ShipType
  
  constructor(name: string, ship: ShipType) {
    this.name = name
    this.ship = ship
  }
}

// Apesar de não ser necessário aqui, seria
// possível explicitar o tipo da mesma forma
const han = new Pilot('Han Solo', falcon)
const luke = new Pilot<Fighter>('Luke Skywalker', xWing)