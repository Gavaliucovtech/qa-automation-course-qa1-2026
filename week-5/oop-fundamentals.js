class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hi! I am ${this.name} and I am ${this.age} years old.`);
  }
}

const alice = new Person("Alice", 25);
alice.greet();

const bob = new Person("Bob", 27);
bob.greet();

const victoria = new Person("Victoria", 20);
victoria.greet();

// Constructor method !!!

class Phone {
  constructor(brand, model) {
    // <- (brand, model) -> this are called properties of a class
    this.brand = brand;
    this.model = model;
  }
  describe() {
    console.log(`This phone ia a ${this.brand} ${this.model}`);
  }
}

const iphone14 = new Phone("Apple", "iPhone14 Pro MAX");
iphone14.describe();
const iphone15 = new Phone("Apple", "iPhone15");
iphone15.describe();
const samsungGalaxy20 = new Phone("Samusng", "Galaxy20");
samsungGalaxy20.describe();
const samsungGalaxy21 = new Phone("Samusng", "Galaxy21");
samsungGalaxy21.describe();

// Functions

function printName(firstName) {
  console.log(firstName);
}

printName("Victoria");
printName("Ion");

//The this Keyword

class Student {
  constructor(name) {
    this.name = name;
  }
  introduce() {
    console.log(`Hi, I am ${this.name}!`);
  }
}

const student1 = new Student("Victoria");
const Student2 = new Student("Ion");

student1.introduce();
Student2.introduce();

// Properties and Methods

class Car {
  constructor(brand, color, speed) {
    this.brand = brand;
    this.color = color;
    this.speed = speed;
  }
  accelerate(amount) {
    this.speed += amount;
    console.log(`${this.brand} is now going at ${this.speed} km/h`);
  }
  brake(amount) {
    this.speed -= amount;
    console.log(`${this.brand} slowed down to ${this.speed} km/h`);
  }
}

const myCar = new Car("Chevrolet", "white", 80);
myCar.accelerate(20);
myCar.brake(30);
