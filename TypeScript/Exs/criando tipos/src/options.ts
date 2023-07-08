import { Planet } from "./index";
import {
  savePlanets,
  updateStatus,
  addSatellite,
  removeSatellite,
  datePlanets,
} from "./functions";

function firstMenuOption(planet: Planet): void {
  savePlanets(planet);
}
function secondMenuOption(namePlanet: string, situation: string): void {
  updateStatus(namePlanet, situation);
}
function thirdMenuOption(namePlanet: string, nameSatellite: string): void {
  addSatellite(namePlanet, nameSatellite);
}
function fourthMenuOption(namePlanet: string, nameSatellite: string): void {
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
