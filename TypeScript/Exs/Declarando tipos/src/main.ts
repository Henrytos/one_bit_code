//const SpaceShips: {}[] = [
//  {
//    id: -1,
//    name: "<NAME>",
//  },
//];
//let i: number = 0;
//const spaceShipSave = (spaceShip: {
//  name: string | null;
//  pilot: string | null;
//  crewLimit: number;
//  crew?: string[];
//  inMission?: boolean;
//}) => {
//  const targetSpaceShip = {
//    id: i,
//    name: spaceShip.name,
//    pilot: spaceShip.pilot,
//    crewLimit: spaceShip.crewLimit,
//    crew: [],
//    inMission: false,
//  };
//  SpaceShips.push(targetSpaceShip);
//  i++;
//  return targetSpaceShip;
//};
//
//const addCrewMember = (
//  spaceShip: { name: string; crewLimit: number; crew: string[]; id: number },
//  CrewMember: string
//) => {
//  if (spaceShip.crew.length < spaceShip.crewLimit) {
//    spaceShip.crew.push(CrewMember);
//    SpaceShips[spaceShip.id] = spaceShip;
//  } else {
//    alert(`O numero de membros foi exedidido ao `);
//  }
//};
//
//const sendSpaceship = (spaceShip: {
//  crewLimit: number;
//  crew: string[];
//  inMission: boolean;
//}) => {
//  if (
//    spaceShip.inMission == false &&
//    spaceShip.crew.length >= spaceShip.crewLimit / 3
//  ) {
//    spaceShip.inMission = true;
//  } else {
//    alert(
//      `A nave já esta em mission ou o numero de membro não é superior a 1/3 do limite `
//    );
//  }
//};
//
//const listSpaceships = () => {
//  const listSpaceships: {}[] = [...SpaceShips];
//  for (let spaceShip of listSpaceships) {
//    console.log(spaceShip);
//  }
//};
//const listSpaceshipsNames = (listShip: { name: string }) => {
//  return listShip.name;
//};
//let option: string | null;
//let nave: {
//  name: string | null;
//  pilot: string | null;
//  crewLimit: number;
//};
//
//do {
//  option = prompt(
//    `Digite a opção desejada:
//    1-Salvar nave
//    2-adicionar menbros
//    3-Enviar nave
//    4-Listar nave
//    5-SAIR`
//  );
//  switch (option) {
//    case "1":
//      nave = {
//        name: prompt("Nome da nave"),
//        pilot: prompt("Nome do piloto"),
//        crewLimit: Number(prompt("O numero maximo de integrantes")),
//      };
//      spaceShipSave(nave);
//      break;
//    case "2":
//   
//      break;
//    case "3":
//      break;
//    case "4":
//      listSpaceships();
//      break;
//    case "5":
//      alert("Encerrando programa");
//      break;
//
//    default:
//      alert("Nenhuma das opções selecionadas");
//      break;
//  }
//} while (option != "5");
//