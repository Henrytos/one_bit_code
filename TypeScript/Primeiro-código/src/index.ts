console.log("hellor word");

type Ship = {
  name: string;
  captain: string;
  speed: number;
  inMission: boolean;
  crew: string[];
};

function sendSpaceship(name: string, captain: string) {
  const spaceship: Ship = {
    name,
    captain,
    speed: 20,
    inMission: true,
    crew: [],
  };

  alert(
    `A nave ${spaceship.name} comandada pelo capitão ${spaceship.captain} foi enviada em uma missão.`
  );

  return spaceship;
}

function accelerate(
  targetSpeed: number,
  spaceship: { name: string; speed: number }
) {
  if (spaceship.speed > targetSpeed) {
    alert(`Reduzindo a velocidade da ${spaceship.name} para ${targetSpeed}...`);
  } else if (spaceship.speed < targetSpeed) {
    alert(
      `Aumentando a velocidade da ${spaceship.name} para ${targetSpeed}...`
    );
  } else {
    alert(`Mantendo a velocidade da ${spaceship.name}...`);
  }
}

const spaceshipName: string | null = prompt(
  "Insira o nome da nave a ser enviada:"
);
const spaceshipCaptain: string | null = prompt(
  "Insira o nome do capitão da nave:"
);

const currentShip = sendSpaceship(spaceshipName!, spaceshipCaptain!);

const targetSpeed: number = Number(
  prompt(`qual velocidade capitão ${currentShip.captain}`)
);

accelerate(targetSpeed, currentShip);
