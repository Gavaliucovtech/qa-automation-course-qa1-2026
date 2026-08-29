const carBrands = ["BMW", "Chevrolet", "KIA", "Honda", "Tesla"];
const numbers = [10, 20, 30, 40, 50];
const message = "      Have a good day!     ";
const decimalNumber = 10.25;

// PART 1: ARRAYS (Car Brands)
// Task 1

console.log(carBrands[1]); //Chevrolet
//console.log(carBrands.at(4)); // This function on my computer is not working and I just comment it
console.log(carBrands.length); //5

//Task 2

carBrands[1] = "Ford";
carBrands[carBrands.length - 1] = "Audi";
console.log(carBrands);

//Task 3
carBrands.push("Hyundai");
console.log(carBrands);

carBrands.pop();
console.log(carBrands);

carBrands.unshift("Mercedes");
console.log(carBrands);

carBrands.shift();
console.log(carBrands);

carBrands.reverse();
console.log(carBrands);

carBrands.sort();
console.log(carBrands);

//Task 4

console.log(carBrands.includes("Toyota")); //false because does not exist
console.log(carBrands.indexOf("BMW")); //1 because BMW is located at index 1
console.log(carBrands.lastIndexOf("BMW")); //1 because it appears at index 1

// Task 5

const brandsString = carBrands.join(", ");
console.log(brandsString);

console.log(Array.isArray(carBrands));

const engineArray = Array.from("ENGINE");
console.log(engineArray);

// PART 2: STRING MANIPULATION
//Task 6

const cleanedMessage = message.trim();
console.log(cleanedMessage);
console.log(cleanedMessage.length);

//Task 7

console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message[0]);
console.log(message[message.length - 1]);

// Task 8

const firstWord = cleanedMessage.split(" ")[0];
console.log(firstWord);

//const lastWord = cleanedMessage.split(" ").at(-1);
//console.log(lastWord); // my computer does not support this version

const newMessage = cleanedMessage.replace("good", "great");
console.log(newMessage);

// Task 9

console.log(cleanedMessage.includes("car"));
console.log(cleanedMessage.indexOf("good"));
console.log(cleanedMessage.startsWith("Have"));
console.log(cleanedMessage.endsWith("day!"));

// Task 10

const words = cleanedMessage.split(" ");
console.log(words);

const greeting = "Have a";
const ending = "good day!";

const combinedMessage = greeting.concat(" ", ending);

console.log(combinedMessage);

// Task 11

const carBrand = "BMW";
const carYear = 2020;

const currentYear = new Date().getFullYear();
const carAge = currentYear - carYear;

const sentence = `My car is a ${carBrand}, it was made in ${carYear}, and it is ${carAge} years old.`;

console.log(sentence);

// PART 3: NUMBERS
//Task 12

console.log(Math.round(decimalNumber));
console.log(Math.floor(decimalNumber));
console.log(Math.ceil(decimalNumber));
console.log(Math.trunc(decimalNumber));

//Task 13

const formattedNumber = decimalNumber.toFixed(2);
console.log(formattedNumber);

console.log(typeof formattedNumber);

//Task 14
const numericString = "25";
const decimalString = "10.25";

const numberValue = Number(numericString);
console.log(numberValue);

const integerValue = parseInt(decimalString);
console.log(integerValue);

const floatValue = parseFloat(decimalString);
console.log(floatValue);

//Task 15

const value = "Good Day!";
console.log(Number.isNaN(value));

const result = 10 / "Good Day!";
console.log(Number.isNaN(result));

const number = 10;
console.log(Number.isInteger(number));

//Task 16

const negativeNumber = -10;
console.log(Math.abs(negativeNumber));

console.log(Math.min(10, 5, 20, 3, 15));

console.log(Math.max(10, 5, 20, 3, 15));

console.log(Math.pow(2, 3));

console.log(Math.sqrt(25));

//Task 17

const randomNumber = Math.random();
console.log(randomNumber);

const randomWholeNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomWholeNumber);
