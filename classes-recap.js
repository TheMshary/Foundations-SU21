// D.R.Y = Don't Repeat Yourself

class Person {
  constructor(name, interests) {
    this.name = name;
    this.interests = interests;
  }

  sayHello = () =>
    console.log(
      `Greetings, fellow homo sapiens. I, ${this.name}, am one of you.`
    );
}

class Instructor extends Person {
  role = "instructor";

  constructor(name, interests, favoriteTopic = "every topic") {
    // initialize attributes/properties
    super(name, interests);
    this.favoriteTopic = favoriteTopic;
  }

  sayHello = () =>
    console.log(
      `Hello students. I am your ${this.role}. Call me ${this.name}. I really like ${this.favoriteTopic}.`
    );
}

class CurriculumEngineer extends Instructor {
  constructor(name, interests, favoriteTopic, curriculum) {
    super(name, interests, favoriteTopic);
    this.curriculum = curriculum;
  }
}

const michael = new Person("Michael Scofield", [
  "Engineering",
  "breaking out of prison",
]);

// michael.sayHello();

const salwa = new Instructor(
  "Salwa",
  ["Styling", "useState"],
  "React (the love of my life)"
);
salwa.sayHello();

const athbi = new Instructor("Athbi", [
  "Movies",
  "Games",
  "Tech",
  "NBA",
  "Football",
]);
athbi.sayHello();

const mshary = new CurriculumEngineer(
  "Mshary",
  ["Meditation", "Overwatch", "Top10Memes"],
  "ALL DEM ALLz",
  "ALL STUFFz"
);
// mshary.sayHello();
