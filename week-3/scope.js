// GLOBAL SCOPE

// let globalVar = "hello";
// console.log(globalVar);

// if (10 > 2) {
//   console.log(globalVar);
// }

let globalVar = "I am global";
console.log(globalVar);

// FUNCTION SCOPE

function greet() {
  let message = "Hello from the function!";
  console.log(message);

  if (5 > 2) {
    console.log(message);
  }
}
greet();

// BLOCK SCOPE

if (true) {
  let blockVar = "I am inside a block";
  console.log(blockVar);
}
