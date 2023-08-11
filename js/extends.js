// step:1
class TeamMember {
  name;
  location;
  id;
  phone;
  constructor(name, location, id, phoneNumber) {
    this.name = name;
    this.location = location;
    this.id = id;
    this.phone = phoneNumber;
  }
  developFeature() {
    console.log(`${this.name} thank you for your feedback`);
  }
}

class Instructor extends TeamMember {
  designation = `Web Design`;
  nationality = "Bangladeshi";
  religion = "Islam";
  constructor(name, location, id, phoneNumber) {
    super(name, location, id, phoneNumber);
  }
  startSupportSession(time) {
    console.log(`Start Support Session at ${time} `);
  }
  createQuiz(module) {
    console.log(`Please create quiz for module ${module}`);
  }
}
const riyad = new Instructor(
  `Jahidul Islam Riyad`,
  `Naogaon, Rajshahi`,
  `444-425-523`,
  `01704995190`
);

console.log(riyad);
riyad.developFeature();

const saim = new Instructor(
  `Saim Ahmed`,
  `Rajshahi`,
  `123-422-544`,
  `01704995191`
);
console.log(saim);
saim.developFeature();
/* class Developer extends TeamMember {
  designation = `Web Developer`;
  nationality = "Bangladeshi";
  religion = "Islam";
  constructor(name, location, id, phoneNumber) {
    super(name, location, id, phoneNumber);
  }
  startSupportSession(time) {
    console.log(`Start Support Session at ${time} `);
  }
  createQuiz(module) {
    console.log(`Please create quiz for module ${module}`);
  }
} */
