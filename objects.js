const student = {
  name: "Hamza",
  favoriteInsturctor: "Mshary",
  age: 1000,
};

// console.log(student.name);
student.favoriteInsturctor = "Abdulghapor";

// console.log(student);

student.clubs = [
  { name: "I hate pizza club", logo: "🍕" },
  { name: "FCB", logo: "🕷" },
];
// console.log(student);

student.clubs.forEach((club) => console.log(club.name));

student.role = "admin";

console.log(student.role);
