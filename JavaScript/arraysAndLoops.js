const food = ["🍔", "🍕", "🧇", "🥞", "🍟"];

console.log(food);

food.push("🥧");

for (let index = food.length - 1; index >= 0; index--) {
  console.log(food[index]);
} // Please Please dont use looopppppssss with arrayssssssss pleasseeeeeee

food.pop();
console.log(food);

console.log(food.slice(1));

const waffle = food.splice(2, 1);

console.log(food);

console.log(waffle);
