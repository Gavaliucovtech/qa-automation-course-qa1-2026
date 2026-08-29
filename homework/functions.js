//const carBrands = ["Toyota", "Honda", "BMW", "Mercedes", "Tesla"];
const numbers = [10, 20, 30, 40, 50];
const carSentence = "I love driving my BMW.";
const decimalNumber = 10.25;

// PART 1: STRING + FUNCTIONS
//Task 1

// function cleanText(text) {
//   return text.trim().toLowerCase();
// }
// const result = cleanText("   Have a good day!   ");
// console.log(result);

// // Task 2

// function getFirstAndLastCharacter(text) {
//   const cleanedText = text.trim();
//   const firstCharacter = cleanedText[0];
//   const lastCharacter = cleanedText[cleanedText.length - 1];

//   return {
//     firstCharacter,
//     lastCharacter,
//   };
// }

// const result = getFirstAndLastCharacter("      Have a good day!     ");
// console.log(result);

//Task 3

function countWords(sentence) {
  // Remove extra spaces and split the sentence into words
  const words = sentence.trim().split(" ");

  return words.length;
}

const result = countWords("Have a good day!");
console.log(result);

//Task 4

// function checkBrand(carBrands, brandName) {
//   const brandToFind = brandName.toLowerCase();

//   const brandExists = carBrands.some(
//     (brand) => brand.toLowerCase() === brandToFind,
//   );

//   if (brandExists) {
//     return "Brand exists";
//   } else {
//     return "Brand not found";
//   }
// }

// const carBrands = ["Toyota", "Honda", "BMW", "Mercedes", "Tesla"];

// console.log(checkBrand(carBrands, "bmw"));

// console.log(checkBrand(carBrands, "ford"));

//Task 5

// function getLastBrand(carBrands) {
//   return carBrands.at(-1);
// }

// const carBrands = ["Toyota", "Honda", "BMW", "Mercedes", "Tesla"];

// console.log(getLastBrand(carBrands));

//Task 6

function joinCarBrands(carBrands) {
  return carBrands.join(", ");
}

const carBrands = ["Toyota", "Honda", "BMW", "Mercedes", "Tesla"];

console.log(joinCarBrands(carBrands));

// Task 7

function roundNumber(number) {
  if (Number.isNaN(number)) {
    return "Invalid number";
  }
  return Math.round(number);
}

console.log(roundNumber(10.25));

console.log(roundNumber(10.75));

console.log(roundNumber(NaN));

// Task 8

function comparePrices(price1, price2) {
  if (price1 === price2) {
    return "Prices are equal";
  } else if (price1 > price2) {
    return "First is higher";
  } else {
    return "Second is higher";
  }
}

console.log(comparePrices(50, 50));

console.log(comparePrices(75, 50));

console.log(comparePrices(30, 50));

// Task 9

function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}
console.log(getRandomNumber());

// PART 4 CONDITIONAL THINKING

// Task 10

function checkBudget(carPrice, budget) {
  if (
    typeof carPrice !== "number" ||
    typeof budget !== "number" ||
    carPrice < 0 ||
    budget < 0
  ) {
    return "Invalid input";
  }

  if (carPrice <= budget) {
    return "Within budget";
  } else {
    return "Over budget";
  }
}

console.log(checkBudget(20000, 25000));

console.log(checkBudget(30000, 25000));

console.log(checkBudget(-10000, 25000));

console.log(checkBudget(20000, -25000));

console.log(checkBudget("20000", 25000));
