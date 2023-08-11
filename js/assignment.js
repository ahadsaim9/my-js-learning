/* **************************Problem-1************************ */
function cubeNumber(number = 0) {
  const result = Math.pow(number, 3);
  if (typeof number !== "number") {
    return "Input must be a number.";
  } else if (number < 0) {
    return "Please enter a positive number.";
  } else {
    return result;
  }
}
const output = cubeNumber(5);
console.log(output);

/* **************************Problem-2************************ */
function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    console.log("Please enter a string.");
  } else if (string1.includes(string2)) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}
// matchFinder("ahad saim", "saim");

/* **************************Problem-3************************ */
function sortMaker(array) {
  if (typeof array[0] === "number" && typeof array[1] === "number") {
    return array.sort((a, b) => b - a);
  } else if (array[0] == array[1]) {
    return "equal";
  }
}

const array1 = [5, 2, 6, 3, 7, 4, 21];
const array2 = ["a", "a"];

console.log(sortMaker(array2));

/* **************************Problem-4************************ */

const address = { street: 10, house: "", society: "Earth Perfect" };
function findAddress(obj) {
  const street = obj.street || "__";
  const houseNumber = obj.house || "__";
  const society = obj.society || "__";
  const output = `${street}, ${houseNumber}, ${society}`;
  return output;
}

const result = findAddress(address);
// console.log(result);
/* **************************Problem-5************************ */
const money = [2, 2, 2, 2, 2];
const totalMoney = money.reduce(function (a, b) {
  return a + b;
}, 0);

function canPay(changeArray, totalDue) {
  const amount = changeArray + totalDue;
  if (money.length == 0) {
    console.log("Array is empty. please inter a array value.");
  } else {
    // console.log(amount);
    return amount;
  }
}
canPay(totalMoney, 20);
