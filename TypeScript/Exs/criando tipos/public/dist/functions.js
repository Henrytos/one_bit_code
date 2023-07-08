import { Planets } from "index";
function findPlanet(name) {
    const planetTarget = Planets.find((planet) => planet.name === name);
    return planetTarget;
}
function savePlanets(planet) {
    Planets.push(planet);
}
function updateStatus(namePlanet, situation) {
    const planetTarget = findPlanet(namePlanet);
    planetTarget.situation = situation;
}
function addSatellite(namePlanet, nameSatellite) {
    const planetTarget = findPlanet(namePlanet);
    planetTarget.satellites.push(nameSatellite);
}
function removeSatellite(namePlanet, nameSatellite) {
    const planetTarget = findPlanet(namePlanet);
    planetTarget.satellites.forEach((satellite, i) => {
        if (satellite == nameSatellite)
            planetTarget.satellites.splice(i, 1);
    });
}
function nameSatellite(satellites) {
    const namesSatellites = satellites.reduce((names, name) => (names += name + " "), "");
    return namesSatellites;
}
function datePlanets() {
    let date = "";
    Planets.map((planet) => {
        date += `  
  nome: ${planet.name}
  cordenadas:${planet.coordinate}
  situação : ${planet.situation}
  satelites:${nameSatellite(planet.satellites)}
  `;
    });
    return date;
}
export { savePlanets, updateStatus, addSatellite, removeSatellite, datePlanets, };
