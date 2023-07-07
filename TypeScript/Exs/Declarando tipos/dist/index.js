"use strict";
const SpaceShips = [];
let i = 0;
const spaceShipSave = (spaceShip) => {
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
const addCrewMember = (spaceShip, CrewMember) => {
    if (spaceShip.crew.length < spaceShip.crewLimit) {
        spaceShip.crew.push(CrewMember);
        SpaceShips[spaceShip.id] = spaceShip;
    }
    else {
        alert(`O numero de membros foi exedidido ao `);
    }
};
const sendSpaceship = (spaceShip) => {
    if (spaceShip.inMission == false &&
        spaceShip.crew.length >= spaceShip.crewLimit / 3) {
        spaceShip.inMission = true;
    }
    else {
        alert(`A nave já esta em mission ou o numero de membro não é superior a 1/3 do limite `);
    }
};
const listSpaceships = () => {
    const listSpaceships = [...SpaceShips];
    for (let spaceShip of listSpaceships) {
        console.log(spaceShip);
    }
};
