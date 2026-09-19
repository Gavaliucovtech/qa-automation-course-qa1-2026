// Part 1: Combining Arrays

// Task 1: Combine Two Arrays

function combineArrays(array1, array2) {
  const result = [];

  for (const value of array1) {
    result.push(value);
  }

  for (const value of array2) {
    result.push(value);
  }

  return result;
}

const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];

console.log(combineArrays(numbers1, numbers2));

//Task 2: Combine and Print

function combineAndPrint(array1, array2) {
  const combinedArray = [];

  for (const value of array1) {
    combinedArray.push(value);
  }

  for (const value of array2) {
    combinedArray.push(value);
  }

  for (let i = 0; i < combinedArray.length; i++) {
    console.log(combinedArray[i]);
  }
}

const numbers01 = [1, 2, 3];
const numbers02 = [4, 5, 6];

combineAndPrint(numbers01, numbers02);

//Task 3: Combine Numbers

function combineNumbers(array1, array2) {
  const result = [];

  for (const number of array1) {
    result.push(number);
  }

  for (const number of array2) {
    result.push(number);
  }

  return result;
}
const numbers10 = [1, 2, 3];
const numbers20 = [4, 5, 6];

const combinedNumbers = combineNumbers(numbers10, numbers20);

console.log(combinedNumbers);

// PART 2: LOOPS + ARRAYS

// Task 4: Find the Largest Number

function findLargestNumber(numbers) {
  let largest = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }

  return largest;
}

const numbers = [12, 5, 27, 8, 19];

console.log(findLargestNumber(numbers));

// Task 5: Count Numbers Greater Than 10

function countGreaterThanTen(numbers) {
  let count = 0;

  for (const number of numbers) {
    if (number > 10) {
      count++;
    }
  }

  return count;
}

const numbersMoreThan10 = [5, 12, 8, 15, 20, 3];

console.log(countGreaterThanTen(numbersMoreThan10));

// Task 6: Reverse an Array

function reverseArray(numbers) {
  const result = [...numbers];
  result.reverse();
  return result;
}

const numberss = [1, 2, 3, 4, 5];

console.log(reverseArray(numberss));
console.log(numberss);

function reverseArrayWithoutReverse(numbers) {
  const result = [];

  for (let i = numbers.length - 1; i >= 0; i--) {
    result.push(numbers[i]);
  }

  return result;
}

const numberss1 = [1, 2, 3, 4, 5];

console.log(reverseArrayWithoutReverse(numberss1));
console.log(numberss1);

// PART 3: OBJECTS

// Task 7: Print Object Properties

const person = {
  name: "Victoria",
  age: 20,
  city: "Sugar Hill",
};

console.log(person["name"]);
console.log(person["age"]);
console.log(person["city"]);

// Task 8: Check Object Property

console.log("name" in person);
console.log("student" in person);

// PART 4: ARRAYS OF OBJECTS

// Task 9: Print Names

const people = [
  { name: "Victoria", age: 20 },
  { name: "Ion", age: 25 },
  { name: "Mark", age: 7 },
];

function printNames(people) {
  for (const person of people) {
    console.log(person.name);
  }
}

printNames(people);

// Task 10: Find Adults

function findAdults(people) {
  const result = [];

  for (const person of people) {
    if (person.age >= 18) {
      result.push(person);
    }
  }

  return result;
}

console.log(findAdults(people));

// PART 5: .forEach()

// Task 11: Print Each Value

const numbersPrint = [10, 20, 30, 40, 50];

function printEachValue(numbers) {
  numbers.forEach(function (number) {
    console.log(number);
  });
}

printEachValue(numbersPrint);

// Task 12: Print Doubled Numbers

const numbersMultiplied = [10, 20, 30, 40, 50];

function printDoubledNumbers(numbers) {
  numbers.forEach(function (number) {
    console.log(number * 2);
  });
}

printDoubledNumbers(numbersMultiplied);

// PART 6: .map()

// Task 13: Double Numbers

const numbersDouble = [10, 20, 30, 40, 50];

function doubleNumbers(numbers) {
  return numbers.map(function (number) {
    return number * 2;
  });
}

console.log(doubleNumbers(numbersDouble));
console.log(numbersDouble);

// Task 14: Uppercase Strings

const words = ["hello", "victoria", "how are you?"];

function uppercaseStrings(words) {
  return words.map(function (word) {
    return word.toUpperCase();
  });
}

console.log(uppercaseStrings(words));
console.log(words);

// Task 15: Get Names

const people1 = [
  { name: "Victoria", age: 20 },
  { name: "Ion", age: 25 },
  { name: "Mark", age: 7 },
];

function getNames(people) {
  return people.map(function (person) {
    return person.name;
  });
}

console.log(getNames(people1));

// PART 7: .filter()

// Task 16: Filter Even Numbers

const numbersEven = [11, 22, 33, 44, 55];

function filterEvenNumbers(numbers) {
  return numbers.filter(function (number) {
    return number % 2 === 0;
  });
}

console.log(filterEvenNumbers(numbersEven));

// Task 17: Filter Long Strings

const words1 = ["hello", "javascript", "QA", "testing", "code"];

function filterLongStrings(words) {
  return words.filter(function (word) {
    return word.length > 5;
  });
}

console.log(filterLongStrings(words1));

// Task 18: Filter Expensive Products

const products = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 50 },
  { name: "Phone", price: 500 },
  { name: "Keyboard", price: 80 },
];

function filterExpensiveProducts(products) {
  return products.filter(function (product) {
    return product.price > 100;
  });
}

console.log(filterExpensiveProducts(products));

// PART 8: .find()

// Task 19: Find a Number

const numbersFind = [11, 26, 6, 33, 50];

function findNumber(numbers, numberToFind) {
  return numbers.find(function (number) {
    return number === numberToFind;
  });
}

console.log(findNumber(numbersFind, 26));

// Task 20: Find a Person

const people2 = [
  { name: "Victoria", age: 20 },
  { name: "Ion", age: 25 },
  { name: "Mark", age: 7 },
];

function findPerson(people, nameToFind) {
  return people.find(function (person) {
    return person.name === nameToFind;
  });
}

console.log(findPerson(people2, "Victoria"));

// PART 9: .some()

// Task 21: Any Numbers Over 100?

const moreNumbers = [11, 356, 76, 120, 234];

function hasNumberGreaterThan100(numbers) {
  return numbers.some(function (number) {
    return number > 100;
  });
}

console.log(hasNumberGreaterThan100(moreNumbers));

//  PART 10: .every()

// Task 22: Are All Numbers Positive?

const positiveNumbers = [10, 20, 30, 40, 50];

function areAllNumbersPositive(numbers) {
  return numbers.every(function (number) {
    return number > 0;
  });
}

console.log(areAllNumbersPositive(positiveNumbers));

// Task 23: Are All Adults?

const people3 = [
  { name: "Victoria", age: 20 },
  { name: "Ion", age: 25 },
  { name: "Mark", age: 7 },
];

function areAllAdults(people) {
  return people.every(function (person) {
    return person.age >= 18;
  });
}

console.log(areAllAdults(people3));

// PART 11: COMBINING ARRAY METHODS

// Task 24: Double Only Even Numbers

const numbers4 = [1, 2, 3, 4, 5, 6];

function filterAndDouble(numbers) {
  return numbers
    .filter(function (number) {
      return number % 2 === 0;
    })
    .map(function (number) {
      return number * 2;
    });
}

console.log(filterAndDouble(numbers4));

//  Task 25: Get Names of Adults

const people4 = [
  { name: "Victoria", age: 20 },
  { name: "Ion", age: 25 },
  { name: "Mark", age: 7 },
  { name: "Maria", age: 30 },
];

function getAdultNames(people) {
  return people
    .filter(function (person) {
      return person.age >= 18;
    })
    .map(function (person) {
      return person.name;
    });
}

console.log(getAdultNames(people4));

// PART 12: CHALLENGE TASKS

// Task 26: Combine, Filter, and Map

const numbers001 = [5, 10, 15, 20];
const numbers002 = [25, 3, 30, 8];

function combineFilterAndDouble(numbers1, numbers2) {
  const combined = [...numbers1, ...numbers2];

  return combined
    .filter(function (number) {
      return number > 10;
    })
    .map(function (number) {
      return number * 2;
    });
}

console.log(combineFilterAndDouble(numbers001, numbers002));

// Task 27: Find a Product

const products2 = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 50 },
  { name: "Phone", price: 500 },
];

function findProduct(products, productName) {
  return products.find(function (product) {
    return product.name === productName;
  });
}

console.log(findProduct(products2, "Phone"));
console.log(findProduct(products2, "Tablet"));

//Task 28: Product Check

const products3 = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 50 },
  { name: "Phone", price: 500 },
];

function hasCheapProduct(products) {
  return products.some(function (product) {
    return product.price < 20;
  });
}

console.log(hasCheapProduct(products3));

// Task 29: Product Validation

const products4 = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 50 },
  { name: "Phone", price: 500 },
];

function areAllProductsValid(products) {
  return products.every(function (product) {
    return product.price > 0;
  });
}

console.log(areAllProductsValid(products4));

// PART 13: FINAL CHALLENGE

// Task 30: Passing Students

const students = [
  { name: "Victoria", age: 20, grade: 95 },
  { name: "Ion", age: 21, grade: 90 },
  { name: "Mark", age: 18, grade: 100 },
  { name: "Maria", age: 19, grade: 70 },
];

function getPassingStudentNames(students) {
  const passingStudents = students.filter(function (student) {
    return student.grade >= 80;
  });

  const allPassing = passingStudents.every(function (student) {
    return student.grade >= 80;
  });

  console.log("All passing students have a grade of 80 or higher:", allPassing);

  return passingStudents.map(function (student) {
    return student.name;
  });
}

console.log(getPassingStudentNames(students));
