const Planets = [];

type Coordinate = [number, number, number, number];
type Situation = "habitado" | "habitável" | "inabitável" | "inexplorado";

type Planet = {
  name: string;
  coordinate: Coordinate;
  situation: string;
  satellites: string[];
};
function findPlanet(name: string) {
  const planetTarget = Planets.find((planet) => planet.name === name);
  return planetTarget;
}

function savePlanets(planet: Planet) {
  Planets.push(planet);
}

function updateStatus(namePlanet: string, situation: string) {
  const planetTarget = findPlanet(namePlanet);
  planetTarget.situation = situation;
}

function addSatellite(namePlanet: string, nameSatellite: string) {
  const planetTarget = findPlanet(namePlanet);
  planetTarget.satellites.push(nameSatellite);
}

function removeSatellite(namePlanet: string, nameSatellite: string) {
  const planetTarget = findPlanet(namePlanet);

  planetTarget.satellites.forEach((satellite: string, i: number) => {
    if (satellite == nameSatellite) planetTarget.satellites.splice(i, 1);
  });
}
function nameSatellite(satellites: string[]) {
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
  let namePlanet: string;
  let nameSatellite: string;
  let situation: string;
  switch (userOption) {
    case 1:
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
      firstMenuOption(planet);
      break;
    case 2:
      namePlanet = prompt(`qual nome do planeta`);
      situation = prompt(`qual a dituação do planeta ${namePlanet}`);

      secondMenuOption(name, situation);
      break;
    case 3:
      namePlanet = prompt(`Qual nome do planeta`);
      nameSatellite = prompt(
        `Qual é o nome do satelite do planeta ${namePlanet} a ser adicionado`
      );

      thirdMenuOption(namePlanet, nameSatellite);
      break;
    case 4:
      namePlanet = prompt(`Qual nome do planeta`);
      nameSatellite = prompt(
        `Qual é o nome do satelite do planeta ${namePlanet} a ser removido`
      );

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
