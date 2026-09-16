const numbers = [3, 6, 9, 12, 15];

//map() transforms each element and return a new array

const tripledNumber = numbers.map((num) => num * 3);
const tripleNumberTwo = numbers.map(function (num) {
  return num * 3;
});

console.log(tripledNumber);
console.log(tripleNumberTwo);

function multiplyNumberByThree(arrNumbers) {
  const multipliedArray = [];

  for (let i = 0; i < arrNumbers.length; i++) {
    const multipliedValue = arrNumbers[i] * 3;
    multipliedArray.push(multipliedValue);
  }
  return multipliedArray;
}

const myTripledArrayNumbers = multiplyNumberByThree(numbers);
console.log(myTripledArrayNumbers);

//filter -> keeps only elements that pass a test and return a new array

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("filter():", evenNumbers);

const numbersTwo = [10, 15, 20, 25, 30];

// find() -> returns the first element that matches the condition

const firstAbove18 = numbersTwo.find((num) => num > 18);
console.log("find():", firstAbove18);

// findIndex -> returns the index of the first element that matches the condition

const indexAbove10 = numbersTwo.findIndex((num) => num > 10);
console.log("findIndex():", indexAbove10);

const fruits = ["Apple", "Banana", "Orange"];
const numbersThree = [1, 2, 3, 4, 5];

// forEach -> executes a function for each element (no return)

console.log("forEach():");
fruits.forEach((fruit) => console.log(" -", fruit));

// every() -> returns true if all elements satisfy the condition

const allPositive = numbersThree.every((num) => num > 0);
console.log("every():", allPositive);

// some() -> returns true if at least one element satisfies the condition

const hasEven = numbersThree.some((num) => num % 2 === 0);
console.log("some():", hasEven);

// chaining methods together

const numbersAll = [10, 13, 18, 20, 25, 32, 50, 72, 96, 102];

const result = numbersAll
  .filter((num) => num % 2 === 0)
  .map((num) => num * num)
  .every((num) => num > 50);

console.log(result);
