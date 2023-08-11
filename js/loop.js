/*******************Simple while loop*******************/

// let i = 0;
// while (i < 10) {
//   i++;
// }
// console.log(i, "Love You MOM");
/*******************array while loop*******************/
/* let j = 0;
let nameS = [22, 23, 26, 35, 50, 55, 36, 37, 39];
while (j < nameS.length) {
  j++;
  const Name = nameS[j];
  if (Name > 50) {
    break;
  }
  console.log(Name);
} */
let j = 0;
let nameS = [22, 23, 26, 35, 50, 55, 36, 37, 39];
while (j < nameS.length) {
  j++;
  const Name = nameS[j];
  if (Name > 49) {
    continue;
  }
  // console.log(Name);
}

// console.log("Nichar ta bapar alaka");

/*******************Simple for loop*******************/

for (let j = 1; j <= 10; j++) {
  // console.log(j, "Love Abbu");
}
/*******************array for loop of number*******************/

// let rollNumbers = [22, 23, 26, 35, 55, 36, 37, 39];
// for (let i = 0; i < rollNumbers.length; i++) {
//   const roll = rollNumbers[i];
//   console.log(roll);
// }
let studentName = ["Saim", "Tanim", "Kamrul", "Shakib", "Ajad", "Ashif"];
for (let i = 0; i < studentName.length; i++) {
  const name = studentName[i];
  if (name == "Kamrul") {
    break;
  }
  // console.log(name);
}
for (let i = 0; i < studentName.length; i++) {
  const name = studentName[i];
  if (name == "Kamrul") {
    continue;
  }
  // console.log(name);
}
/*******************array for loop of string*******************/
let student = ["Saim", "Tanim", "Kamrul", "Shakib", "Ajad", "Ashif"];
student.push("Ranobir");
student.push("mustak");
student.unshift("Abdul Ahad");
student.slice(2, 4);

for (let i = 0; i < student.length; i++) {
  // console.log(student[i]);
}
/******************* sort array for loop*******************/

for (roll of studentName) {
  // console.log(roll);
}

const students = {
  name: "saim",
  student_id: "9082",
  phoneNumber: "01704995191",
  address: "Shibganj, Chapai Nawabganj, Rajshahi",
};
for (student in students) {
  // console.log(student, ": ", students[student]);
}
