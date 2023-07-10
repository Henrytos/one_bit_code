function first(array) {
  return array[0];
}

function last<Type>(array:Type[]):Type {
  return array[array.length - 1];
}

const pilots = ["Luke", "Biggs", "Wedge", "Han", "Lando"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// Tipo any
const firstPilot = first(pilots);
const firstNumber = first(numbers);
// Tipo inferido
const lastPilot = last(pilots);
const lastNumber = last(numbers);

