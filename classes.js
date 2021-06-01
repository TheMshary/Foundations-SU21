// const instructorMshary = {
//   name: "Mshary",
//   interests: ["Meditation", "Overwatch", "Top10Memes"],
//   favoriteTopic: "JavaScript",
// };
// const instructorSalwa = {
//   name: "Salwa",
//   interests: ["Styling", "useState"],
//   favoriteTopic: "React (the love of my life)",
// };
// const instructorAthbi = {
//   name: "Athbi",
//   interests: ["Movies", "Games", "Tech", "NBA", "Football"],
//   favoriteTopic: "EXPRESS",
// };

// Name convention: Starts with capital letter + SINGULAR
// class Instructor {
//   name = "Mshary";
//   interests = ["Meditation", "Overwatch", "Top10Memes"];
//   favoriteTopic = "JavaScript";

//   // function defined inside class is called a "method"
//   sayHello = () => console.log(`Hello, I'm ${this.name}`);
// }

// const instructor = new Instructor(); // creates an instance of the class, an "object".
// instructor.interests.push("Glorious PC MasterRace");

// const anotherInstructor = new Instructor(); // creates a SECOND Instructor object

// Empty class example
class EmptyClassExample {}
const emptyInstance = new EmptyClassExample();

// -------- Reusable Class & Inheritance -------- \\
class Person {
  constructor(name, interests) {
    this.name = name;
    this.interests = interests;
  }

  sayHello = () => console.log(`Hello, I'm ${this.name}`);
}

class Instructor extends Person {
  constructor(name, interests, favoriteTopic) {
    super(name, interests);
    this.favoriteTopic = favoriteTopic;
  }

  sayHello = () =>
    console.log(
      `Hello, I'm ${this.name}, my favorite topic is ${this.favoriteTopic}`
    );
}

const taiba = new Person("Taiba", ["Memes", "Gifs", "Emojis"]);
taiba.sayHello();

const mshary = new Instructor(
  "Mshary",
  ["Meditation", "Overwatch", "Top10Memes"],
  "JavaScript"
);

mshary.sayHello();

const salwa = new Instructor(
  "Salwa",
  ["Styling", "useState"],
  "React (the love of my life)"
);
salwa.sayHello = () => console.log(`HIIIIIIII, I'm ${salwa.name}`);
salwa.sayHello();

const athbi = new Instructor(
  "Athbi",
  ["Movies", "Games", "Tech", "NBA", "Football"],
  "EXPRESS"
);
// athbi.sayHello();
