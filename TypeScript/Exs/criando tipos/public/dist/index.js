const Planets = [];
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
function firstMenuOption(planet) {
    savePlanets(planet);
}
function secondMenuOption(namePlanet, situation) {
    updateStatus(namePlanet, situation);
}
function thirdMenuOption(namePlanet, nameSatellite) {
    addSatellite(namePlanet, nameSatellite);
}
function fourthMenuOption(namePlanet, nameSatellite) {
    removeSatellite(namePlanet, nameSatellite);
}
function fiveMenuOption() {
    const planets = datePlanets();
    alert(planets);
}
let userOption = 0;
while (userOption !== 6) {
    const menu = `Painel Principal
    1 - Adicionar planeta
    2 - Atualizar Situação
    3 - Adicionar satélite
    4 - Remover satélite
    5 - Listar Planetas
    6 - Sair
  `;
    userOption = Number(prompt(menu));
    let namePlanet;
    let nameSatellite;
    let situation;
    switch (userOption) {
        case 1:
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
            firstMenuOption(planet);
            break;
        case 2:
            namePlanet = prompt(`qual nome do planeta`);
            situation = prompt(`qual a dituação do planeta ${namePlanet}`);
            secondMenuOption(name, situation);
            break;
        case 3:
            namePlanet = prompt(`Qual nome do planeta`);
            nameSatellite = prompt(`Qual é o nome do satelite do planeta ${namePlanet} a ser adicionado`);
            thirdMenuOption(namePlanet, nameSatellite);
            break;
        case 4:
            namePlanet = prompt(`Qual nome do planeta`);
            nameSatellite = prompt(`Qual é o nome do satelite do planeta ${namePlanet} a ser removido`);
            fourthMenuOption(namePlanet, nameSatellite);
            break;
        case 5:
            fiveMenuOption();
            break;
        case 6:
            alert("Encerrando programa");
            break;
        default:
            alert("Opção inválida! Retornando ao painel principal...");
            break;
    }
}
