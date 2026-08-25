// String

let name = "John";
let nameTwo = "Alex";
let nameThree = `Ronaldo`;
const myNumber = "1998"; // <- this is a string, because it is in the "double quotes"

// Number

const birthYear = 1965;
const anotherNumner = 2.5;

//Boolean

let isLightOn = false;
console.log("is the light on?", isLightOn);

//After 1 hour you come back and reassigning the variable

isLightOn = true;
console.log("is the light on?", isLightOn);

// Null

let seatOwner = null;
console.log(seatOwner);

//One 1 hour passes, someone takes the seat

seatOwner = "Ava";
console.log(seatOwner);

//Undefined

let studentPresent; // <- This is called Declaration
console.log(studentPresent);

// I check attendance

studentPresent = true; // <- This is an Assignment
console.log(studentPresent);

//Array

const colors = ["red", "green", "blue"]; // <- keep them same data types
const whatever = ["red", 5, true]; //<- something like this no
const number = [20, 43, 77]; //<- Keep the same dsata types

// Object

const person = {
  name: "Alex",
  age: 25,
  isStudent: true,
};
console.log(person.name);
