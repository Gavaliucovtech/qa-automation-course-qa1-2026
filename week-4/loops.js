console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

// Example - Counting numbers

for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}

// Run (iteration) 1: i = 1; -> Count: 1
// Run (iteration) 2: i = 2; -> Count: 2
// Run (iteration) 3: i = 3; -> Count: 3
// Run (iteration) 4: i = 4; -> Count: 4
// Run (iteration) 5: i = 5; -> Count: 5
// Run (iteration) 6: i = 6; -> No print

// Example looping through an Array

const fruits = ["orange", "banana", "kiwi"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// const fruits = ["orange", "banana", "kiwi"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[0]);
// }

// Example - Looping each character in a string

const word = "hello";

for (let i = 0; i < word.length; i++) {
  console.log("Character:", word[i]);
}

// WHILE LOOP

let i = 0;

while (i <= 5) {
  console.log(i);
  i++;
}

let isLightOn = true;

while (isLightOn) {
  console.log("Hello students");
  isLightOn = false;
}

let v = 1;
{
  console.log("Hello students");
  v++;
}

// THE FOR ... OF LOOP

const numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
  console.log("Count:", num);
}

const colors = ["green", "red", "blue", "yellow"];

for (const color of colors) {
  console.log(`I like all the following colors: ${color}`);
}

// BREAK IN LOOPS

const studentNames = ["Victoria", "Assil", "David", "Tamar"];

for (let i = 0; i < studentNames.length; i++) {
  if (studentNames[i] === "David") {
    break;
  }
  console.log(studentNames[i]);
}

// continue (it skips the one you mentioned and still continues)

const students = ["Victoria", "Assil", "David", "Tamar"];

for (let i = 0; i < students.length; i++) {
  if (students[i] === "David") {
    continue;
  }
  console.log(students[i]);
}
