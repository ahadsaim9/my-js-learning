const multipleLine =
  "first line code \n" +
  "second line code \n" +
  "third line code \n" +
  "fourth line code ";
console.log(multipleLine);

/*  Used Template String */

const newMultiline = `
First line text
Second line text
Third line text
Fourth line text
Fifth line text
`;

// console.log(newMultiline);

/* normal  */
const a = 10;
const b = 20;
const summary = "sum of: " + a + " and " + b + " is: " + (a + b);
// console.log(summary);

/*  Used  `Backtick` */
const newSummary = `
sum of: ${a} and ${b} is: ${a + b}`;
// console.log(newSummary);

const student = {
  Name: "Ahad saim",
  Address: [
    "Vill: Pirgacchi",
    "Post: Dhainagar",
    "Thana: Shibganj",
    "Dis: Chapai Nawabganj",
    "Country: Bangladesh",
  ],
  Phone_Number: "01704995191",
};
// const address = student.Address.map((student) => student);
// student.Address.forEach((student) => console.log(student));
// console.log(address);
const firstStudentName = ` My Student Name is: ${student.Name},  Address is: ${student.Address}, and phone number is: ${student.Phone_Number} `;
// console.log(firstStudentName);
