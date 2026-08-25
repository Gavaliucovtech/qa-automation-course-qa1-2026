// 1. Arithmetic Operators

console.log(10 + 5);
console.log(10 - 5);
console.log(10 * 5);
console.log(10 / 5);

let a = 10;
a++; // <- Behind the scene a = 10 + 1;
console.log(a);

let b = 10;
b--; // Behind the scene: <- b = 10 - 1;
console.log(b);

console.log(10 % 7); // Result: 3 because 10 % 7 will always give us a remainder

console.log(10 ** 3);

// 2. Comparison Operators

console.log(10 === 10);
console.log(10 === "10");

console.log(10 > 5);
console.log(10 < 5);
console.log(10 != 10);

// 3. Logical Operators

console.log(10 > 5 && 5 < 10);
console.log(10 > 5 || 5 > 10);
console.log(!true);

// 4. Truthy vs Falsy

let number = 0;

if (!number) {
  console.log("Falsy value detected");
}

let name = "Victoria";

if (name) {
  console.log("Truthy value detected");
}

let color = "Green" || "Blue";
console.log(color);
