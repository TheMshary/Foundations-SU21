let number = 5;

if (number > 7) {
  console.log(`I'm greater than 7`);
} else {
  console.log(`I'm less than 7`);
  let number = 6; //local variable inside the else
  // number = 6 , updating the value
  console.log(number); // print 6
}

console.log(number); //print 5

//***********************Operators*****************************
// ! = not (!true => false) , (!false => true)
// || or ( true or false => true , false or true => true , true or true => true) at least one condition is true will pass
// && and ( true and false => false , false  and true => false , true and true => true)
//***************************************************************

let name = "Ayah";
let favoriteInstructor = "Mshary";

if (
  (name !== "Ayah" && favoriteInstructor === "Salwa") ||
  favoriteInstructor === "Ghapor"
)
  console.log(
    `Hello, I'm ${name} and my fav instructor is ${favoriteInstructor}`
  );

//********************************************************************************************
let number1 = 1;
let number2 = 2;
let number3 = 3;

if (!(number1 > number2) && number3 > number2) console.log("Helloooooo");

let boolean = true;
console.log(!boolean); // will print false
console.log(!number1); // will print false , anything with a value is true exept for 0
