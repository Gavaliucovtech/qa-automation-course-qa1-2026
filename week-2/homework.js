// 1 Write the data type of yeach value

// "Hello World" //<- String
// 42 //<- Number
// true // <- Boolean
// null // <- Null
// undefined // <- Undefined
// [1,2,3] // <- Array
// {name: "Alex", age: 20 } //<- Object

// 2 Create Variables

let favoriteMovie = "The age of Adaline";

let age = 32;

let doYouLikeJavaScript = true;
console.log("Do you like JavaScript?", doYouLikeJavaScript);

let phoneNumber;
console.log(phoneNumber);

//Later when I can add it

phoneNumber = true;
console.log(phoneNumber);

let favoriteColor = null;
console.log(favoriteColor);

//Later I add favorite color

favoriteColor = "Green";
console.log(favoriteColor);

// 3 Primitive vs Non-Primitive
//a
let a = "JS"; // <- Primitive
let b = [10, 20]; // <- Non-Primitive
let c = 100; //<- Primitive
let d = { city: "Paris" }; // <- Non-Primitive
//b
// Arrays and Objects are called non-primitive because they are mutable, this means that they can have multiple values and their values can be changed.

//4 Array

let cars = ["Tesla", "Chevrolet", "Lamborghini", "Mercedes", "BMW"];
console.log(cars);

let years = [2000, 2005, 2010, 2015, 2020];
console.log(years);

let answers = [true, false, true, false, true];
console.log(answers);

//5 Object

let person = {
  name: "Victoria",
  age: 32,
  city: "Atlanta",
  job: "QA Engineer",
  favoriteColor: "Green",
  hobbies: ["Traveling", "Watching Movies", "Cooking"],
};

console.log(person);

console.log(person.name);
console.log(person.job);

let macBookPro = {
  brand: "Apple",
  model: "MacBook Pro",
  year: 2018,
  color: "Black",
  price: 2000,
  features: ["Camera", "Bluetooth", "Touch ID"],
};

console.log(macBookPro);

console.log(macBookPro.model);
console.log(macBookPro.price);

let car = {
  brand: "Chevrolet",
  model: "Tahoe",
  year: 2021,
  color: "White",
  price: 45000,
  features: ["Bluetooth", "360 Camera", "Heated Seats"],
};

console.log(car);

console.log(car.brand);
console.log(car.year);

// If Statement

let number = 100;

//check if number is positive
if (number > 0) {
  console.log("Positive number");
}

// 7. If-Else

let isDay = true;

if (isDay) {
  console.log("It is daytime.");
} else {
  console.log("It is nighttime.");
}

// 8. Else if

let score = 69;

if (score > 90) {
  console.log("Grade: A");
} else if (score > 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Fail");
}

// 9. Switch Statement

let summerMonth = 1;

switch (summerMonth) {
  case 1:
    console.log("June");
    break;
  case 2:
    console.log("July");
    break;
  case 3:
    console.log("August");
  default:
    console.log("Invalid Summer Month ");
}
