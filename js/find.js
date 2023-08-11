const numbers = [13, 4, 24, 50, 10, 11, 24, 53, 42, 60, 53, 25, 33];

const division = numbers.find((f) => f % 5 === 0);
console.log(`find: `, division);
const division2 = numbers.filter((f) => f % 5 === 0);
console.log("filter: ", division2);
const division3 = numbers.map((n) => n + 10);
// console.log(`map: `,division3);
// let TK = 10;
// if (TK) {
//   console.log(TK);
// } else {
//   console.log("Don't have money");
// }
// let Money = -10;
// if (Money < 0) {
//   console.log("Don't have money");
// } else {
//   Money = Money * 2;
//   console.log(Money);
// }
// let taka = 40;
// const food = "available";
// const coldDrinks =
//   taka > 50 && food == "available"
//     ? "1 pis Fish khabo den "
//     : "Agg kha taka nai";
// console.log(coldDrinks);
