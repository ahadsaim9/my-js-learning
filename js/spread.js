/* Spread operator */
const numbers = [13, 31, 54, 53, 554, 564, 3, 45, 35];
const number1 = Math.max(...numbers);
console.log(number1);
const number2 = Math.min(...numbers);
console.log(number2);
const numbers1 = [55, 45, 63, 63, ...numbers, 999, 456];
console.log(numbers1);
console.log(...numbers1);
const number3 = [...numbers];
console.log(number3);
