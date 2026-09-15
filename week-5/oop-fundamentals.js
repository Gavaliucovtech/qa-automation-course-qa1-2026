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

class Phone {
  constructor(brand, model) {
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
