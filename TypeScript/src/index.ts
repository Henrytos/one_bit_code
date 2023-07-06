//Tipos basicos

let age: number = 8;
const firstName: string = "henry";
const isValid: boolean = true;
let idk: any = 5;

idk = "12";
idk = true;
idk = undefined;
idk = null;

const ids: number[] = [1, 2, 3, 4, 5];
const boleans: boolean[] = [true, false, false, true];
const names: string[] = ["Henry", "Franz", "Ramos"];

//tupla
const pesons: [number, string] = [1, "1"];

//Lista de Tuplas
const people: [number, string][] = [
  [1, "1"],
  [2, "2"],
];

//Intersections
const productId: string | number | boolean = "product";

//Enum
enum Direction {
  Up = 1,
  Down = 2,
}

const direction = Direction.Up;

console.log(direction);
console.log(age);
