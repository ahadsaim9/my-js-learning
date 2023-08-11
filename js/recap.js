// let salary = 50000;
// salary = 55000;
// console.log(salary);

// const number = [22, 44, 33, 55, 64, 25, 64, 25];
// const number1 = [66, 77, 88, 69, ...number, 200];
// console.log(number1);

// function calculateSalary(jakat, tax = 0.025, bonus = 0) {
//   const remaining = jakat - jakat * tax;
//   const total = remaining + bonus;
//   return total;
// }
// const result = calculateSalary(30000, 0.025, 15000);
// console.log(result);

// array function
// const salaryIs = (salary, tax = 0.025, bonus = 0) =>
//   salary - salary * tax + bonus;

// const totalSalary = salaryIs(30000, 0.1, 5000);
// console.log(totalSalary);

// const createHtml = `
// <div>
// <h1>Ahad Saim Store</h1>
// <p>Hear get fruits and vegetable</p>
// <p>This fruits is organic.</p>
// </div>
// `;

// destructuring
const array1 = [
  11,
  12,
  14,
  15,
  16,
  17,
  21,
  (brand = {
    brand_name: "Realme 7 Pro",
    price: 25000,
    ram: "8GB",
    rom: "128GB",
    other_brand: {
      price: 31000,
      ram: "8GB",
      rom: "128GB",
    },
  }),
];

const valueIs = array1[7].brand_name;
const otherBrandValue = array1[7].other_brand;

console.log(otherBrandValue);
const array2 = [...array1, 24, 25, 26, 27, 29];
// console.log(array2);

const { a, b, ...x } = { a: 32, b: 33, c: 36, d: "Saim" };

