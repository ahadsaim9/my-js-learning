// Question:1
const numbers = [1, 3, 5, 7, 9, 11];
const event = numbers.map((n) => n + 1);
console.log(`map result is: `, event);

// Question:2
const numbers1 = [33, 50, 56, 88, 70, 82, 110, 50];
const division10 = numbers1.filter((f) => f % 10 === 0);
console.log(`filter result is: `, division10);

// Question:3
const numbers2 = [33, 50, 56, 88, 70, 82, 110, 50];
const find = numbers2.find((f) => f % 10 === 0);
console.log(`find result is: `, find);

// Question:4
const numbers3 = [1, 55, 32, 22, 66, 43, 6, 11];
const sum10 = numbers3.reduce((previous, current) => previous + current);
console.log(`Total Number is: `, sum10);

// Question:5
const people = [
  { name: "Saim", money: 50 },
  { name: "Masud", money: 70 },
  { name: "Shakil", money: 80 },
];
const money = people.map((p) => p.money);
const total = money.reduce((x, y) => x + y);
console.log(`Total: `, total);

// Question:6
const student = {
  Name: "Ahad Saim",
  Age: 17,
};
console.log(`student age is: `, student.Age);

// Question:7
const date = {
  location: [
    {
      Name: `Masud Rana`,
      id: `640-465-345`,
      country: `Bangladesh`,
      city: `Dhaka`,
    },
  ],
};
const city = date.location[0].city;
console.log(`   city is:`, city);
