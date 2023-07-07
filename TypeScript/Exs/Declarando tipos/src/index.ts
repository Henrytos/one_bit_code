const SpaceShips: {}[] = [];
let i: number = 0;
const spaceShipSave = (spaceShip: {
  name: string;
  pilot: string;
  crewLimit: number;
  crew?: string[];
  inMission?: boolean;
}) => {
  const targetSpaceShip = {
    id: i,
    name: spaceShip.name,
    pilot: spaceShip.pilot,
    crewLimit: spaceShip.crewLimit,
    crew: [],
    inMission: false,
  };
  SpaceShips.push(targetSpaceShip);
  i++;
  return targetSpaceShip;
};

const addCrewMember = (
  spaceShip: { name: string; crewLimit: number; crew: string[]; id: number },
  CrewMember: string
) => {
  if (spaceShip.crew.length < spaceShip.crewLimit) {
    spaceShip.crew.push(CrewMember);
    SpaceShips[spaceShip.id] = spaceShip;
  } else {
    alert(`O numero de membros foi exedidido ao `);
  }
};

const sendSpaceship = (spaceShip: {
  crewLimit: number;
  crew: string[];
  inMission: boolean;
}) => {
  if (
    spaceShip.inMission == false &&
    spaceShip.crew.length >= spaceShip.crewLimit / 3
  ) {
    spaceShip.inMission = true;
  } else {
    alert(
      `A nave já esta em mission ou o numero de membro não é superior a 1/3 do limite `
    );
  }
};

const listSpaceships = () => {
  const listSpaceships: {}[] = [...SpaceShips];
  for (let spaceShip of listSpaceships) {
    console.log(spaceShip);
  }
};
