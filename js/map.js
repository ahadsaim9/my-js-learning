// step:1
const numbers0 = [13, 14, 45, 34, 54, 56, 77, 90];

function getDoubled(numbers) {
  const output = [];
  for (number of numbers) {
    const doubled = doubledIt(number);
    output.push(doubled);
  }
  return output;
}
const doubledIt = (num1) => num1 + 10;
const result = getDoubled(numbers0);
// console.log(result);

// step: 2
const numbers = [32, 34, 532, 24, 42, 12, 53];
function getAdd(numbers) {
  const additional = [];
  for (number of numbers) {
    const add = doubledIt1(number);
    additional.push(add);
  }
  return additional;
}
/*  function doubledOld(num) {
   return num *2;
 } */
//**Shortcut**
const doubledIt1 = (num) => num - 2;

const result1 = getAdd(numbers);
// console.log(result1);

// numbers.forEach((num) => console.log(num+2));

// const r = numbers.map((num) =>console.log(num + 2));

// step: 3 **shortcut**
const numbers1 = [32, 34, 532, 24, 42, 12, 53];
const result01 = numbers1.map((x) => x * 2);
// console.log(result01);
// step: 4
const mathNumber = [66, 77, 47, 89, 79, 91, 73, 80].map((x) => x + 5);
// console.log(mathNumber);

const physicsNum = [66, 77, 47, 89, 79, 91, 73, 80].map((num) => num + 2);
// console.log(physicsNum);
//step:5
const friends = [
  "Masud Rana",
  "Saim Ahmed",
  "Abdullah G",
  "Sony Islam",
  "Abdullah All Kutub",
];
const friendsFirstLetter = friends.map((a) => a[0]);
// console.log(friendsFirstLetter);
const friendLength = friends.map((name) => name.length);
// console.log(`Friends: `, friendLength);

//step:6
const products = [
  { brand_name: "Realme 7 Pro", price: 23500, ram: "8GB", rom: "128GB" },
  { brand_name: "Realme 8 Pro", price: 26000, ram: "8GB", rom: "128GB" },
  { brand_name: "Realme 9 Pro", price: 29000, ram: "8GB", rom: "128GB" },
  { brand_name: "Realme  x3", price: 30000, ram: "8GB", rom: "128GB" },
  { brand_name: "Realme x5", price: 32000, ram: "8GB", rom: "128GB" },
];

const items = products.map((p) => p.brand_name);
// console.log(`items: `, items);
const prices = products.map((p) => p.price);
// console.log(prices);
const rams = products.map((p) => p.ram);
// console.log(rams);
const roms = products.map((p) => p.rom);
// console.log(roms);
