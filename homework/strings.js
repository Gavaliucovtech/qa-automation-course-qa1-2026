// STRING MANIPULATION //

//length

let text = "Gavaliucov";
console.log(text.length); // 10

// Accessing characters

let word = "Gavaliucov";
console.log(word[0]); // G
console.log(word[4]); // l

// Changing case

const str = "Gavaliucov";
console.log(str.toUpperCase()); // GAVALIUCOV
console.log(str.toLowerCase()); // gavaliucov

// Trimming Spaces

let messy = "      Gavaliucov        ";
console.log(messy.trim()); // Gavaliucov

// Slice

let words = "VictoriaGavaliucov";
console.log(text.slice(0, 8)); //
console.log(text.slice(8)); //

// Replace

let string = "My name is Anna";
console.log(string.replace("Anna", "Victoria")); // My name is Victoria

// Includes

let sentence = "My name is Victoria";
console.log(sentence.includes("Victoria")); // true
console.log(sentence.includes("Anna")); // false

// Split

let fruits = "tesla,bmw,kia";

console.log(fruits.split(",")); // [ 'tesla', 'bmw', 'kia' ]
console.log(fruits.split("")); // [ 't', 'e', 's', 'l','a', ',', 'b', 'm','w', ',', 'k', 'i',a']
console.log(fruits.split(" ")); // [ 'tesla,bmw,kia' ]

// concat

const str1 = "I";
const str2 = "Like";
const str3 = "your dress";
console.log(str1, str2, str3); // I Like your dress

// - indexOf

let wordss = "I Like your dress";
console.log(wordss.indexOf("dress")); // 12
console.log(wordss.indexOf("pants")); // -1

// startsWith and endsWith

let file = "strings.pdf";

console.log(file.startsWith("strings")); // true
console.log(file.endsWith("pdf")); // true

// TEMPLATE LITERALS

const str4 = "I";
const str5 = "Like";
const str6 = "this dress!";

console.log(`${str4} ${str5} ${str6} It costs only ${100 / 4} dollars?`);

const age = 20;
if (age < 21) {
  console.log(
    `You cannot buy alchool, your age is ${age} and it's under the age limit`,
  );
}

// Multi-line strings

let poem = `
Roses are red
Violets are blue
Sugar is sweet
And so are you`;
console.log(poem);

// Combining string methods + templete literals

let user = "Victoria";
let score = 150;

console.log(`Player: ${user.toUpperCase()}, score: ${score * 2}`); // Player: VICTORIA, score: 300

// Chain method

let myLanguage = "I like your dress";
console.log(myLanguage.replace("dress", "shoes").toLowerCase()); //i like your shoes

// How can we reverse a string

const textt = "Gavaliucov";
const reversed = textt.split("").reverse().join("");
console.log(reversed); // vocuilavaG
