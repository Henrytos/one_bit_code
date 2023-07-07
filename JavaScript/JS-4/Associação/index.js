const Adress = require("./Address");
const Person = require("./Person");

const adressPerson = new Adress('Papoula', 88, 'flor de maio', 'sp', 'SP')
const person = new Person('Henry franz ramos arcaya', adressPerson)

console.log(person)

console.log(person.adress.fullAdress())