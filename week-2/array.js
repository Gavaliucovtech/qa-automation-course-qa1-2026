// TRANSFORMERS

// Accessing array elements

let fruits = ["Apple", "Banana", "Cherry"];

console.log(fruits[0]); //"Apple"
console.log(fruits[1]); //"Banana"
console.log(fruits[2]); //"Cherry"

// Updating element in an array

fruits[1] = "Mango";
console.log(fruits); // ['Apple', 'Mango', 'Cherry']

// Array properties
// length

console.log(fruits.length); // returns nr 3 because it's shows how many items in the fruits

// concat

const colors = ["red", "blue"];
const moreColors = ["yellow", "white"];
const allColors = colors.concat(moreColors);

console.log(colors); // [ 'red', 'blue' ]
console.log(moreColors); // [2'yellow', 'white' ]
console.log(allColors); // [ 'red', 'blue', 'yellow', 'white' ]

//flat

const nestedArr = [
  [1, 2],
  [3, 4],
  [5, 6, 10, 12, 14],
];
const flattenedArr = nestedArr.flat();
console.log(nestedArr[2]); // [ 5, 6, 10, 12, 14 ]
console.log(nestedArr[2].length); // 5
console.log(nestedArr); // [ [ 1, 2 ], [ 3, 4 ], [ 5, 6, 10, 12, 14 ] ]
console.log(flattenedArr); // [1, 2, 3, 4, 5, 6, 10, 12, 14]

//slice

const grades = ["A", "B", "C", "D", "E"];
const sliceGrades = grades.slice(1, 4);
console.log(grades); // [ 'A', 'B', 'C', 'D', 'E' ]
console.log(sliceGrades); // [ 'B', 'C', 'D' ]

// MUTATORS

const mutableFruits = [...fruits]; // Will copy the array with fruits from the top
console.log(mutableFruits); //[ 'Apple', 'Mango', 'Cherry' ]

// push method

mutableFruits.push("Kiwi");
console.log(mutableFruits); // [ 'Apple', 'Mango', 'Cherry', 'Kiwi' ]

//pop method

mutableFruits.pop();
console.log(mutableFruits); // [ 'Apple', 'Mango', 'Cherry' ]

//unshift

mutableFruits.unshift("Grapes");
console.log(mutableFruits); // [ 'Grapes', 'Apple', 'Mango', 'Cherry' ]

//shift

mutableFruits.shift();
console.log(mutableFruits); // [ 'Apple', 'Mango', 'Cherry' ]

// reverse

mutableFruits.reverse();
console.log(mutableFruits); // [ 'Cherry', 'Mango', 'Apple' ]

//sort

mutableFruits.sort();
console.log(mutableFruits); // [ 'Apple', 'Cherry', 'Mango' ]

//check the original array

console.log(fruits); // [ 'Apple', 'Mango', 'Cherry' ]

// FINDERS

//indexOf
const cars = ["BMW", "Mercedes", "Tesla", "Kia", "Jeep"];
console.log(cars.indexOf("Tesla")); // 2 because Tesla is at index 2 and is the first one mentioned

//lastIndex
console.log(cars.lastIndexOf("Kia")); // 3 because Kia is at index 3 and it is the last one

// at

//console.log(cars.at(0)); // BMW because BMW is at index 0

// includes

console.log(cars.includes("Kia")); // true because Kia is included in the array

//// The Joiners & Converters /////

// join method

console.log(cars.join(" | ")); // BMW | Mercedes | Tesla | Kia | Jeep

// Array.from

const str = "Hello";
const myArr = Array.from(str);
console.log(myArr); // [ 'H', 'e', 'l', 'l', 'o' ]

//Array.isArray

const luckyNumbers = [7, 10, 19];
console.log(Array.isArray(luckyNumbers)); //  // true because "Alice" it's not an array

const studentName = "Alice";
console.log(Array.isArray(studentName)); // false because "Alice" it's not an array

// git test
//check
