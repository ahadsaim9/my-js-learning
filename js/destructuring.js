const object1 = {
  model: "Realme 6 pro",
  Brand: "Realme",
  price1: "27500",
  color1: "blue",
};
// const price = object1.price;
// const nameIs = object1.model_name;
// const brandName = object1.Brand_Name;
// const color = object1.color1;
// console.log(nameIs);
// console.log(brandName);
// console.log(price);
// console.log(color);

const { model_name, Brand_Name, price, color2 } = {
  model_name: "Realme 7 pro",
  Brand_Name: "Realme",
  price: "27500",
  color2: "Skyblue",
};

// console.log(model_name);
// console.log(Brand_Name);
// console.log(price);
const { color1 } = object1;
// console.log(color1);

const { Brand } = object1;
// console.log(Brand);

// array destructuring
const [n, n1, n2, n3, n4, n5, n6, n7] = [13, 43, 45, 43, 53, 56, 57];
// console.log(n, n5, n4);
const array = [13, 43, 45, 43, 53, 56, 57];
const [v, v1, v2, v3, v4, v5, v6, v7] = array;
// console.log(`array : `, array);

// console.log(`v3`, v1);

function getArray1() {
  return [10, 20, 50, ...array, 60, 100];
}
const [N, N1, N2, N3, N4] = getArray1();
// console.log(N3, N);

function getArray1() {
  return [10, 20, 50, ...array, 60, 100];
}
const [a, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10] = getArray1();
// console.log(a, a6, a8);

// Object destructuring
const { x, z } = { x: 54, y: 55, z: 56 };
// console.log(x, z);
