 // Step:1
const numbers = [13, 4, 24, 53, 10, 11, 24, 53, 42, 61, 25, 53, 25, 33];
const tiny = numbers.filter((n) => n < 20);
console.log(tiny);
const bigNumber = numbers.filter((n) => n > 20);
console.log(bigNumber);
const eventNumberIs = numbers.filter((num) => num % 2 === 0);
console.log(eventNumberIs);
const oddNumber = numbers.filter((n) => n % 2 === 1);
console.log(oddNumber); 

// Step:2

const products = [
  { brand_name: "Realme 7 Pro", price: 23500, ram: "6GB", rom: "128GB" },
  { brand_name: "Realme 8 Pro", price: 26000, ram: "8GB", rom: "128GB" },
  { brand_name: "Realme 9 Pro", price: 29000, ram: "12GB", rom: "128GB" },
  { brand_name: "Realme  x3", price: 30000, ram: "8GB", rom: "128GB" },
  { brand_name: "Realme x5", price: 35000, ram: "12GB", rom: "256GB" },
];

const productPrice = products.filter((f) => f.price >= 30000);
console.log(productPrice);

// Step:3
const bestPhone = products
  .map((price) => price.price)
  .filter((p) => p >= 30000);
console.log(bestPhone);

const topPhoneRam = products.map((m) => m.ram);
console.log(topPhoneRam);
const topPhoneRom = products.map((m) => m.rom);
console.log(topPhoneRom);
const filterTopPhoneRam = topPhoneRam.filter((f) => f === "12GB");
console.log(filterTopPhoneRam);
