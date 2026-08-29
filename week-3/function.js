// 1. Creating a function

function greet() {
  console.log("Hello World");
}
greet();

// 2. Function with a single parameter

// Name inside paranthesis is called parameter!
// in our case (personName) is a parameter

function greetPerson(personName) {
  console.log(`Hello ${personName}, welcome to the team!`);
}
greetPerson("Victoria");

// 3. Function with multiple parameters

function add(num1, num2, num3) {
  console.log(num1);
  console.log(num2);
  console.log(num3);
}
add(3, 6, 9);

function printNumber(num1, num2) {
  if (num1 > num2) {
    console.log("Number is bigger");
  } else {
    console.log("Number is smaller");
  }
}

printNumber(3, 1);

// 4. Default Parameters

function greetStudent(name = "student") {
  console.log(`Hello ${name}, welcome to JavaScript class!`);
}
greetStudent("Victoria");

// 5. Return Values

function addNewNumbers(num1, num2) {
  return num1 + num2;
}
const functionResult = addNewNumbers(3, 6);

console.log(functionResult);

//or

function addNewNumbersTwo(num1, num2) {
  const result = num1 + num2;
  return result;
}
const functionResultTwo = addNewNumbersTwo(3, 6);
console.log(functionResultTwo);

// 6. Arrow Functions

const greetStudents = (student) => {
  console.log(`Hello ${student}, welcome to class!`);
};
greetStudent("Victoria");

// amother exemple

const subtractTwoNumbers = (num1, num2) => num1 - num2;
const resultTwo = subtractTwoNumbers(5, 3);

console.log(resultTwo + 2);
