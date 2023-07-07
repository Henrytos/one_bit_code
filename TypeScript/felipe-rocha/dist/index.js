"use strict";
//Tipos basicos
let age = 8;
const firstName = "henry";
const isValid = true;
let idk = 5;
idk = "12";
idk = true;
idk = undefined;
idk = null;
const ids = [1, 2, 3, 4, 5];
const boleans = [true, false, false, true];
const names = ["Henry", "Franz", "Ramos"];
//tupla
const pesons = [1, "1"];
//Lista de Tuplas
const people = [
    [1, "1"],
    [2, "2"],
];
//Intersections
const productId = "product";
//Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
})(Direction || (Direction = {}));
const direction = Direction.Up;
//type Assertions
const produtName = "Boné";
const itemName = produtName;
console.log(direction);
console.log(age);
