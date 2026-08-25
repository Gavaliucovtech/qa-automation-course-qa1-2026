// Arithmetic Operators //

// Addition

console.log(5 + 3);

// Subtraction

console.log(5 - 3);

//Multiplication

console.log(2 * 12);

//Divison

console.log(20 / 4);

//Exponentation

console.log(2 ** 4); // 2 to the power of 4

// Increment   (Increse)

let c = 5;
c = 5 + 1;
console.log(c);

let a = 5;
a++; // <- Behind the scene a = 5 + 1;
console.log(a);

//Decrement (Decrese)

let b = 3;
b--; // Behind the scene: <- b = 3 - 2;
console.log.apply(b);

//Modulus

console.log(10 % 3); // Result: 1 because 10 % 3 will always give me a remainder
console.log(10 % 2); // Result: 0 because 10 % 2 will never give us a remainder

//Comparison Operators///

console.log(5 === 5); // true
console.log(5 === "5"); // False

console.log(5 > 2); //true
console.log(5 > 10); // false
console.log(5 >= 5); // true
console.log(5 <= 2); // false

console.log(5 > 3); // true
console.log(!5 > 3); // false

console.log(12 === 12); // true
console.log(12 != 12); //false

//Logical Operators//

console.log(5 > 3 && 2 < 4); //true
console.log(5 > 3 && 4 < 2); //false

console.log(5 > 3 || 1 > 4); //true
