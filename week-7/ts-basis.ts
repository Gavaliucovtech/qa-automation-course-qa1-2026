// string Type

let favoriteFood: string = "Pizza";
favoriteFood = "Pasta";

// number Type

let age: number = 25;
let temperature: number = 36.6;

console.log(age, temperature);

// boolean Type

let isOnline: boolean = true;
let hasDiscount: boolean = false;

console.log(isOnline);
console.log(hasDiscount);

// any Type

let randomValue: any = "Hello";
randomValue = 42;
randomValue = true;

// The Array Type

let fruits: string[] = ["Apple", "Banana", "Cherry"];
let scores: number[] = [85, 90, 95];

// Array <type>:

let ages: Array<number> = [18, 25, 30];

// Object Type

let person: { name: string; age: number; isStudent: boolean } = {
  name: "Alice",
  age: 22,
  isStudent: true,
};

console.log(`${person.name} is ${person.age} years old.`);

// Function Typed Parameters

function greet(name: string, age: number) {
  console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}
greet("Alice", 25);

// Function Default Parameters

function greetUser(name: string = "Guest") {
  console.log(`Hello, ${name}!`);
}
greetUser();
greetUser("Charlie");

//Function Return Value Types

function add(value1: number, value2: number): number {
  return value1 + value2;
}
const myValue = add(2, 4);
console.log(myValue);
