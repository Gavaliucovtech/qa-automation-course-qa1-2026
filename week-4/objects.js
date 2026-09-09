// // The "in" operator

const person = {
  name: "Alice",
  age: 25,
  isStudents: true,
};
console.log("name" in person); // true
console.log("weight" in person); //  false

// // Dot vs Bracket notation

console.log(person.name); // Alice
console.log(person.age); // 25
console.log(person.weight); // undefined

console.log(person["name"]); // Alice
console.log(person["age"]); //25
console.log(person["weight"]); // undefined

// we use here bracket notation because it has 2 words separated

const user = { "first name": "Alice" };
console.log(user["first name"]);

//Looping through an object using use "for ... in" loop

const person = {
  name: "Alice",
  age: 25,
  isStudents: true,
};

for (const key in person) {
  console.log(`This is the key ${key} and this is the value ${person[key]}`);
  console.log(key + ":" + person[key]);
}

// Adding and updating properties

const person = {
  name: "Alice",
  age: 25,
  isStudents: true,
};

person.height = 170;
console.log(person);
console.log(person.height);

person.age = 26;
console.log(person);

// Removing Properties

delete person.isStudents;
console.log(person);

// Nested Objects

const student = {
  name: "Bob",
  grades: {
    math: 90,
    science: 85,
  },
};
student.grades.math = 100;
student.grades.history = 90;
student.grades.geography = 100;
delete student.grades.geography;
console.log(student.grades);
console.log(student.grades.math);

// Object Methods

const person = {
  name: "Alice",
  age: 25,
  isStudents: true,
  greet: function () {
    console.log("Hello this is Alice");
  },
  greetTwo() {
    console.log("Hello this is Alice 2");
  },
};

person.greet();
person.greetTwo();

// Using "this" in method

const car = {
  brand: "Tesla",
  speed: 120,
  info() {
    console.log(`${this.brand} is going at ${this.speed}km/h`);
  },
};
car.info();

// Methods with Parameter

const calculator = {
  add(a, b) {
    return a + b;
  },
  multiply(a, b) {
    return a * b;
  },
};
console.log(calculator.add(2, 4));
console.log(calculator.multiply(3, 5));

// Build-in Object Mrthods

const person = {
  name: "Alice",
  age: 25,
  isStudents: true,
};

console.log(Object.keys(person)); // [ 'name', 'age', 'isStudents' ]
console.log(Object.values(person)); // [ 'Alice', 25, true ]
console.log(Object.entries(person)); // [ [ 'name', 'Alice' ], [ 'age', 25 ], [ 'isStudents', true ] ]
