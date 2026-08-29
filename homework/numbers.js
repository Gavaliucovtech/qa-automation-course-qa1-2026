let age = 18;
console.log(age); // 18

let price = 10.99;
console.log(price); //10.99

let temperature = +30;
console.log(temperature); //30

// Basic Number Operations

console.log(5 + 5); // 10
console.log(20 - 6); // 14
console.log(6 * 8); // 48
console.log(100 / 30); // 3.333333335
console.log(50 % 4); // 2

// Comparing Numbers

console.log(10 > 4); // true
console.log(4 < 1); // false
console.log(2 === 2); // true
console.log(4 !== 1); // true

// Rounding Numbers
// Math.round rounds to the nearest whole number
console.log(Math.round(5.5)); // 6
console.log(Math.round(5.2)); //5

// Math.floor - always rounds down

console.log(Math.floor(10.9)); //10
console.log(Math.floor(10.1)); //10

// Math.ceil - always rounds up

console.log(Math.ceil(11.1)); //12
console.log(Math.ceil(11.9)); //12

// Math.trunc - removes the decimal part

console.log(Math.trunc(20.9)); //20
console.log(Math.trunc(-20.9)); //-20

// FORMATING NUMBERS
// .toFixed - formats a number to a fixed number of decimal places
//Returns a string, not a number

let number = 4.756;
console.log(price.toFixed(2)); //10.99

// Converting Numbers
// Number - converts a value into a number

console.log(Number("55")); //55
console.log(Number("vic")); //NaN

// parseInt - converts a value into an integer by removing decimals

console.log(parseInt("1.5")); //1

// parseFloat - converts a value into a decimal number

console.log(parseFloat("2.5")); // 2.5

// CHECKING NUMBERS
//isNaN - Checks whether a value is Not a Number

console.log(isNaN("vic")); //true
console.log(isNaN(5)); //false

// Number.isInteger - checks whether a value is an integer

console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(10.5)); //false

// Math Utility Methods

//Math.abs - returns the absolute value of a number

console.log(Math.abs(-5)); //5

//Math.min - returns the smalles value

console.log(Math.min(2, 5, 0)); //0

// Math.mix - returns the largest value

console.log(Math.max(4, 26, 199)); // 199

// Math.pow - raises a number to a power

console.log(Math.pow(5, 5)); //3125

// Math.sqrt - returns the square root of a number

console.log(Math.sqrt(100)); //10

// Math.random - generates a random decimal number between 0(inclusive) and 1 (inclusive)

console.log(Math.random()); //0.9047563395680485
