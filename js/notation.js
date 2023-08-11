const student = {
  name: "Masud Rana",
  student_id: 30,
  marks: {
    math: 79,
    physics: 88,
    chemistry: 73,
  },
};

const mathMark = student.marks["math"];
console.log(mathMark);
const mark = student["marks"][`chemistry`];
console.log(mark);
const physics = student["marks"];
const physicsMark = physics["physics"];
console.log(physicsMark);

