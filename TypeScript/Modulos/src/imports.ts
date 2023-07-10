import { Spaceship } from "exports";

interface AttackSpaceship extends Spaceship {
  weapons: number;
}

export let xwing: AttackSpaceship = {
  name: "X-Wing",
  pilot: "Luke Skywalker",
  speed: 50,
  weapons: 4,
};
  
