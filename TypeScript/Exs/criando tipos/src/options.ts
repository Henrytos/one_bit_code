import { Planet, Coordinate } from "./index";
import {
  savePlanets,
  updateStatus,
  addSatellite,
  removeSatellite,
  datePlanets,
} from "./functions";

let namePlanet: string;
let nameSatellite: string;
let situation: string;

function firstMenuOption(): void {
  let name: string = prompt("nome do planeta");
  let coordinate: Coordinate = [
    Number(prompt(`cordena x do ${name}`)),
    Number(prompt(`cordena y do ${name}`)),
    Number(prompt(`cordena z do ${name}`)),
    Number(prompt(`cordena w do ${name}`)),
  ];
  situation = prompt(`qual situação do planeta ${name}`);

  let planet: Planet = {
    name,
    coordinate,
    situation,
    satellites: [],
  };
  savePlanets(planet);
}
function secondMenuOption(): void {
  namePlanet = prompt(`qual nome do planeta`);
  situation = prompt(`qual a dituação do planeta ${namePlanet}`);

  updateStatus(namePlanet, situation);
}
function thirdMenuOption(): void {
  namePlanet = prompt(`Qual nome do planeta`);
  nameSatellite = prompt(
    `Qual é o nome do satelite do planeta ${namePlanet} a ser adicionado`
  );
  addSatellite(namePlanet, nameSatellite);
}
function fourthMenuOption(): void {
  namePlanet = prompt(`Qual nome do planeta`);
  nameSatellite = prompt(
    `Qual é o nome do satelite do planeta ${namePlanet} a ser removido`
  );

  removeSatellite(namePlanet, nameSatellite);
}
function fiveMenuOption(): void {
  const planets = datePlanets();
  alert(planets);
}

export {
  firstMenuOption,
  secondMenuOption,
  thirdMenuOption,
  fourthMenuOption,
  fiveMenuOption,
};
