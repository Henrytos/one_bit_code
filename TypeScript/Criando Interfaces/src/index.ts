// Uma Interface é outra maneira de
// declarar um tipo para um objeto,
// portanto funciona de forma semelhante

// Criação de uma interface
interface CelestialBody {
  name: string;
  mass: number;
}

// Interfaces podem ser herdadas ou herdar umas às outras
interface Star extends CelestialBody {
  age: number;
  planets: Planet[];
}

interface Planet extends CelestialBody {
  population: number;
  createSatellite: (name: string) => void;
}

let sun: Star = {
  name: "Sol",
  mass: 1.989 * 10 ** 30,
  age: 4.603 * 10 ** 9,
  planets: [],
};

class MilkyWayPlanet implements Planet {
  name: string;
  population: number;
  mass: number;
  constructor(name: string, mass: number, population: number) {
    this.name = name;
    this.mass = mass;
    this.population = population;
  }
  
  createSatellite(name: string): void {
   //.....
  }
}
