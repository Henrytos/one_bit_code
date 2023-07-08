import {
  firstMenuOption,
  secondMenuOption,
  thirdMenuOption,
  fourthMenuOption,
  fiveMenuOption,
} from "./options";

export const Planets = [];

type Coordinate = [number, number, number, number];
type Situation = "habitado" | "habitável" | "inabitável" | "inexplorado";

export type Planet = {
  name: string;
  coordinate: Coordinate;
  situation: string;
  satellites: string[];
};

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
