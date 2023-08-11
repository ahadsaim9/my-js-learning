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

function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "Please enter a string.";
  } else if (string1.includes(string2)) {
    return true;
  } else {
    return false;
  }
}

function sortMaker(arr) {
  for (const element of arr) {
    if (typeof element !== "number") {
      return "Invalid Input";
    }
    if (arr.some((element) => element < 0)) {
      return "Invalid input";
    }
  }
  if (arr[0] === arr[1]) {
    return "equal";
  } else {
    return arr.sort((a, b) => b - a);
  }
}

const address = { street: 10, house: "15A", society: "Earth Perfect" };
function findAddress(obj) {
  const street = obj.street || "__";
  const house = obj.house || "__";
  const society = obj.society || "__";
  const output = street + "," + house + "," + society;
  return output;
}

function canPay(changeArray, totalDue) {
  if (changeArray.length === 0) {
    return "Your balance is empty";
  }
  const totalCoins = changeArray.reduce((sum, value) => sum + value, 0);
  return totalCoins >= totalDue;
}






