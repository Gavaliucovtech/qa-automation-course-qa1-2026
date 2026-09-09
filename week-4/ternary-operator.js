//Ternanry Operator
//Syntax: condition ? "expresion if true" : "expresion if false";

let age = 15;
let message = age >= 18 ? "You are an adult" : "You are a minor";

console.log(message);

// example with " if else"

let age2 = 27;
let message2 = "";

if (age2 >= 18) {
  message2 = "You are an adult";
} else {
  message2 = "You are a minor";
}
console.log(message2);

// Using Ternary Operators in Functions

function checkEvenOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
console.log(checkEvenOdd(10));
console.log(checkEvenOdd(9));

// Ternary Operators with Template Literals

let name = "Alice";
let isVIP = true;
console.log(`Hello, ${isVIP ? "VIP" : "Guest"} ${name}!`);

// Common Use Cases

let temperature = 30;
let weather = temperature > 25 ? "Hot" : "Cool";

console.log(weather);

// Quick Inline Conditions

console.log(5 > 3 ? "Yes" : "No");
