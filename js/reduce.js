const numbers = [13, 4, 24, 50, 10, 11, 24, 53, 42, 60, 53, 25, 33];
const sumIs = numbers.reduce((previous, current) => {
  //   console.log(previous, current);
  return previous + current;
}, 0);
console.log(sumIs);

const friends = ["Saim ", "Masud ", "Abdullah ", "Soykot", "Simul"];
const allFriends = friends.reduce((x, y) => x + y);
console.log(allFriends);

