const foods = ["🍔", "🍕", "🧇", "🥞", "🍟", "🍟"];

["🍔🥛", "🍕", "🧇", "🥞", "🍟"];

// .forEach() , .map(), .filter() , .find()

foods.forEach((food) => console.log(food));

const allFoods = foods.map((food) => `${food}🥛`);

console.log(allFoods);

const hatePizza = foods.filter((food) => food !== "🍕");

console.log(hatePizza);

const fries = foods.find((food) => food === "🍟");
console.log(fries);
