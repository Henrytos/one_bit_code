let operation=(...numbers)=>{return (numbers.reduce((accum, num) => accum + num, 0))/numbers.length}
console.log(`media aritimetica: ${operation(1,2,3,4,5,6,7,8,9)}`)
let acumulador=0
let peso = 0

operation=(...numbers)=>{numbers.forEach((num,i) =>  {acumulador+=numbers[i].n*numbers[i].p; peso +=  numbers[i].p});return acumulador/peso}
console.log(`media aritimetica: ${operation({ n: 7, p: 2}, { n: 9, p: 5 }, { n: 3, p: 1 })}`)
operation=(...numbers)=>{ numbers.sort((a, b) => a-b) ;console.log(numbers);return numbers.length%2==0?(numbers[numbers.length/2-1]+numbers[numbers.length/2])/2 : numbers[numbers.length/2-0.5]}
console.log(operation(15,14,3,7,3))

