// STRING MANIPULATION //

//length

let text = "JavaScript";
console.log(text.length); // 10 => shows how many characters are in the string

// Accessing characters

let word = "Hello";
console.log(word[0]); // H because is showing forst index
console.log(word[4]); // o because is showing 4th index

// Changing case

const str = "Hello World";
console.log(str.toUpperCase()); // HELLO WORLD
console.log(str.toLowerCase()); // hello world

// Trimming Spaces

let messy = "      JavaScript        ";
console.log(messy.trim()); // JavaScript becase it will remove the spaces from the bigging and at the end of the string

// Slice

let words = "JavaScript";
console.log(text.slice(0, 4)); // Java because it sliced from index 0 to 4 where 4 was not included
console.log(text.slice(4)); // Script because it sliced from index 4

// Replace

let string = "I like cats";
console.log(string.replace("cats", "dogs")); // I like dogs because it replaced cats to dogs

// Includes

let sentence = "I love coding";
console.log(sentence.includes("love")); // true because it is included
console.log(sentence.includes("hate")); // false because it is not included

// Split

let fruits = "apple,banana,grape";

console.log(fruits.split(",")); // [ 'apple', 'banana', 'grape' ]
console.log(fruits.split("")); // ['a', 'p', 'p', 'l', 'e',',', 'b', 'a', 'n', 'a', 'n''a',', 'g', 'r', 'a', 'p', 'e']
console.log(fruits.split(" ")); // [ 'apple,banana,grape' ]

// concat

const str1 = "Hello";
const str2 = "World";
const str3 = "How are you?";
console.log(str1, str2, str3); // Hello  World  How are you?

// - indexOf

let wordss = "JavaScript is awsome";
console.log(wordss.indexOf("Script")); //4 is going to show us the index 4 for the fist letter of Script
console.log(wordss.indexOf("Pyton")); // -1 because it does not exist

// startsWith and endsWith

let file = "report.pdf";

console.log(file.startsWith("report")); // true
console.log(file.endsWith("pdf")); // true

// TEMPLATE LITERALS

const str4 = "Hello";
const str5 = "World";
const str6 = "How are you?";

console.log(
  `${str4} ${str5}! ${str6} Today's temperature is ${100 / 2} farenheit.`,
); // Hello World! How are you? Today's temperature is 50 farenheit.

const age = 16;
if (age < 21) {
  console.log(
    `You cannot enter the ckub, your age is ${age} and it's under the age limit`,
  );
}

// Multi-line strings

let poem = `
Roses are red
Violets are blue
JavaScript is fun
And so are you`;
console.log(poem); // it will print us as a poem in lines

// Combining string methods + templete literals

let user = "Victoria";
let score = 150;

console.log(`Player: ${user.toUpperCase()}, score: ${score * 2}`); // Player: VICTORIA, score: 300

// CHhain method

let myLanguage = "I LIKE CATS";
console.log(myLanguage.replace("CATS", "DOGS").toLowerCase()); //i like dogs

// How can we reverse a string

const textt = "Hello";
const reversed = textt.split("").reverse().join("");
console.log(reversed); // olleH
