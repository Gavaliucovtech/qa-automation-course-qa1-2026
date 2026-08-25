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

console.log(fruits.length);

// concat

const colors = ["red", "blue"];
const moreColors = ["yellow", "white"];
const allColors = colors.concat(moreColors);

console.log(colors);
console.log(moreColors);
console.log(allColors);

//flat

// const nestedNumbersArr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// const flattenedArr = nestedNumbersArr.flat();
// console.log(nestedArr[2]);

//slice

const grades = ["A", "B", "C", "D", "E"];
const sliceGrades = grades.slice(1, 4);
console.log(grades);
console.log(sliceGrades);

////////// Mutators///////

const mutableFruits = [...fruits];
console.log(mutableFruits);

// push method

mutableFruits.push("Kiwi");
console.log(mutableFruits);

//pop method

mutableFruits.pop();
console.log(mutableFruits);

//unshift

mutableFruits.unshift("Grapes");
console.log(mutableFruits);

//shift

mutableFruits.shift();
console.log(mutableFruits);

// reverse

mutableFruits.reverse();
console.log(mutableFruits);

//sort

mutableFruits.sort();
console.log(mutableFruits);

//check the original array

console.log(fruits);

////// Finders /////

//indexOf
const cars = ["BMW", "Mercedes", "Tesla", "Kia", "Jeep"];
console.log(cars.indexOf("Tesla"));

//lastIndex
console.log(cars.lastIndexOf("Kia"));

// at

//console.log(cars.at(0));

// includes

console.log(cars.includes("Kia"));

//// The Joiners & Converters /////

// join method

console.log(cars.join(" | "));

// Array.from

const str = "Hello";
const myArr = Array.from(str);
console.log(myArr);

//Array.isArray
const luckyNumbers = [7, 10, 19];

const studentName = "Alice";
console.log(Array.isArray(studentName));

// git test
