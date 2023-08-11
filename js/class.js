// syntactic sugar
class Instructor {
  name;
  designation = `Web course Instructor`;
  team = `Web team`;
  location;
  salary;
  dateOfBirth;
  constructor(name, location, salary, dateOfBirth) {
    (this.name = name),
      (this.location = location),
      (this.salary = salary),
      (this.dateOfBirth = dateOfBirth);
    //   }
    //   startSupportSession(time) {
    //     console.log(`Start Support Session at ${time} `);
    //   }
    //   createQuiz(module) {
    //     console.log(`Please create quiz for module ${module}`);
  }
}
const saim = new Instructor("Ahad Saim", "Rajshahi", 30000, "01-02-2001");
console.log(saim);
// saim.startSupportSession(`9.00 pm`);
// saim.createQuiz(10);

const najmul = new Instructor(
  `Najmul Hassan`,
  "Chapai Nawabgonj",
  27000,
  "11-11-1999"
);
console.log(najmul);
const masud_rana = new Instructor(
  "Masud Rana",
  "Shibgonj",
  40000,
  "02-03-1998"
);
console.log(masud_rana);
const masudRanaSalary = masud_rana.salary;
console.log(masudRanaSalary);

const masudRanaTeam = masud_rana.team;
console.log(masudRanaTeam);
