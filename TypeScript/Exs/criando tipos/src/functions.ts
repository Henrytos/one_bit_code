import { Planet } from "./index";
import { Planets } from "index";

function findPlanet(name: string): Planet {
  const planetTarget = Planets.find((planet) => planet.name === name);
  return planetTarget;
}

function savePlanets(planet: Planet): void {
  Planets.push(planet);
}

function updateStatus(namePlanet: string, situation: string): void {
  const planetTarget = findPlanet(namePlanet);
  planetTarget.situation = situation;
}

function addSatellite(namePlanet: string, nameSatellite: string): void {
  const planetTarget = findPlanet(namePlanet);
  planetTarget.satellites.push(nameSatellite);
}

function removeSatellite(namePlanet: string, nameSatellite: string): void {
  const planetTarget = findPlanet(namePlanet);

  planetTarget.satellites.forEach((satellite: string, i: number) => {
    if (satellite == nameSatellite) planetTarget.satellites.splice(i, 1);
  });
}
function nameSatellite(satellites: string[]): string {
  const namesSatellites = satellites.reduce(
    (names: string, name: string) => (names += name + " "),
    ""
  );
  return namesSatellites;
}
function datePlanets(): string {
  let date: string = "";
  Planets.map((planet: Planet) => {
    date += `  
  nome: ${planet.name}
  cordenadas:${planet.coordinate}
  situação : ${planet.situation}
  satelites:${nameSatellite(planet.satellites)}
  `;
  });
  return date;
}

export {
  savePlanets,
  updateStatus,
  addSatellite,
  removeSatellite,
  datePlanets,
};
