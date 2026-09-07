// Task 1

for (let v = 0; v <= 10; v++) {
  console.log("Count:", v);
}

// Task 2

const cars = ["BMW", "Chevrolet", "KIA"];

for (let i = 0; i < cars.length; i++) {
  console.log("Index:", i, "Value:", cars[i]);
}

// Task 3

function printFirstAndLast(array) {
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      console.log("First element:", array[i]);
    }

    if (i === array.length - 1) {
      console.log("Last element:", array[array.length - 1]);
    }
  }
}

printFirstAndLast(["BMW", "Chevrolet", "KIA"]);

// Task 4

const word = "Victoria";
let i = 0;

while (i < word.length) {
  console.log("Character:", word[i]);
  i++;
}

// Task 5

const colors = ["Blue", "Yellow", "Pink", "Green"];

for (let i = 0; i < colors.length; i++) {
  if (colors[i] === "Pink") {
    break;
  }
  console.log(colors[i]);
}

// Task 6

const numbers = [10, 20, 30, 40, 50];
for (const num of numbers) {
  console.log("Count:", num);
}

// Task 7

const fruits = ["Apple", "Peach", "Mango", "Kiwi"];

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === "Mango") {
    continue;
  }
  console.log(fruits[i]);
}

// Task 8

function toUpperCase(array) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i].toUpperCase());
  }

  return newArray;
}

const flowers = ["rose", "tulip", "sunflower"];

const result = toUpperCase(flowers);

console.log(result);
console.log(flowers);

// Task 9

function printLongStrings(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 4) {
      console.log(array[i]);
    }
  }
}

printLongStrings(["BMW", "Toyota", "KIA", "Chevrolet", "Honda"]);
