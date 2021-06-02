class Student {
  constructor(name, age, favInst) {
    this.name = name;
    this.age = age;
    this.favInst = favInst;
  }
  sayHello = () => {
    console.log(`Hello, I'm ${this.name}`);
  };
}

const maha = new Student("Maha", 300, "Salwa");
maha.sayHello();
console.log(maha.favInst);

class PhdStudent extends Student {
  role = "student";
  constructor(name, age, favInst, major) {
    super(name, age, favInst);
    this.major = major;
  }
}

const ali = new PhdStudent("Ali Bah", 400, "Taiba", "Physician");
const mohd = new PhdStudent("Mohd AlEnzi", 88, "Athbi", "OT");
ali.sayHello();
console.log(ali.role);
console.log(mohd.role);
