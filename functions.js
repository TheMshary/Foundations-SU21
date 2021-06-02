let cookies = "🍪";
let milk = "🥛";

// let logg = console.log("hi"); //console.log is not a VALUE!!!!!!!!!
// console.log(logg); // will print UNDEFINED, console.log is not a VALUE!!!!!!!!!

function printFood(cookies, milk) {
  //let milk = "milk"; // you can not do that since you are recieving milk
  milk = "milk"; //yes we can do that, just updating the value
  let aya = `Hi my name is Ayah and I love ${cookies} & ${milk}`;
  return aya;
}

console.log(printFood(cookies, milk)); // will print the returend value!!!! VALUEEE!!!!

let number1 = 1;
let number2 = 2;
let number3 = 3;

function add(num1, num2) {
  return num1 + num2;
} // Ewwwwwww

const addTwoNumbers = (number1, number2) => number1 + number2; //fancyyy 🤩

let addition = add(number1, number2);
let resultAddition = add(addition, number3);
console.log(addTwoNumbers(number1, number1));
// console.log(add(number1, number2));
// console.log(add(number1, number3));
