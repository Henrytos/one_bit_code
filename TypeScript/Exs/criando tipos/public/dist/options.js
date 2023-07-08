import { savePlanets, updateStatus, addSatellite, removeSatellite, datePlanets, } from "./functions";
let namePlanet;
let nameSatellite;
let situation;
function firstMenuOption() {
    let name = prompt("nome do planeta");
    let coordinate = [
        Number(prompt(`cordena x do ${name}`)),
        Number(prompt(`cordena y do ${name}`)),
        Number(prompt(`cordena z do ${name}`)),
        Number(prompt(`cordena w do ${name}`)),
    ];
    situation = prompt(`qual situação do planeta ${name}`);
    let planet = {
        name,
        coordinate,
        situation,
        satellites: [],
    };
    savePlanets(planet);
}
function secondMenuOption() {
    namePlanet = prompt(`qual nome do planeta`);
    situation = prompt(`qual a dituação do planeta ${namePlanet}`);
    updateStatus(namePlanet, situation);
}
function thirdMenuOption() {
    namePlanet = prompt(`Qual nome do planeta`);
    nameSatellite = prompt(`Qual é o nome do satelite do planeta ${namePlanet} a ser adicionado`);
    addSatellite(namePlanet, nameSatellite);
}
function fourthMenuOption() {
    namePlanet = prompt(`Qual nome do planeta`);
    nameSatellite = prompt(`Qual é o nome do satelite do planeta ${namePlanet} a ser removido`);
    removeSatellite(namePlanet, nameSatellite);
}
function fiveMenuOption() {
    const planets = datePlanets();
    alert(planets);
}
export { firstMenuOption, secondMenuOption, thirdMenuOption, fourthMenuOption, fiveMenuOption, };
