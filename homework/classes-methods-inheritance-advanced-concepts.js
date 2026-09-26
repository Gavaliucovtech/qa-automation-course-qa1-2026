// TASK 1: CREATE A CAR CLASS

class Car {
  #fuelLevel = 100;

  constructor(brand, price) {
    this.brand = brand;
    this.price = price;
  }

  drive() {
    this.#consumeFuel();
  }

  refuel() {
    this.#fuelLevel = 100;
  }

  getInfo() {
    return `The ${this.brand} costs $${this.price} and has ${this.#fuelLevel}% fuel.`;
  }

  // TASK 2: METHODS WITH PARAMETERS

  discount(amount) {
    this.price -= amount;
  }

  isExpensive(limit) {
    if (this.price > limit) {
      return "Expensive";
    } else {
      return "Affordable";
    }
  }

  // TASK 3: GETTER AND SETTER

  get priceTag() {
    return `$${this.price}`;
  }

  set updatePrice(newPrice) {
    if (newPrice < 0) {
      this.price = 0;
    } else {
      this.price = newPrice;
    }
  }

  // TASK 4: PRIVATE METHOD

  #consumeFuel() {
    this.#fuelLevel -= 10;
  }

  // TASK 5: STATIC PROPERTY AND METHOD

  static totalCars = 0;

  static showTotalCars() {
    return Car.totalCars;
  }
}

//Task 6: ElecttricCar Class

class ElectricCar extends Car {
  constructor(brand, price, batteryRange) {
    super(brand, price);

    this.batteryRange = batteryRange;
  }

  drive() {
    this.batteryRange -= 20;
  }

  charge() {
    this.batteryRange = 100;
  }
}

// TASK 1: TEST CAR

const car1 = new Car("Toyota", 30000);

console.log(car1.getInfo());

car1.drive();

console.log(car1.getInfo());

car1.refuel();

console.log(car1.getInfo());

// TASK 2: TEST DISCOUNT

car1.discount(5000);

console.log(car1.getInfo());

console.log(car1.isExpensive(20000));

console.log(car1.isExpensive(30000));

// TASK 3: TEST GETTER

console.log(car1.priceTag);

// TASK 3: TEST SETTER

car1.updatePrice = 25000;

console.log(car1.priceTag);

// Test negative price

car1.updatePrice = -5000;

console.log(car1.priceTag);

// TASK 4: TEST PRIVATE METHOD

car1.drive();

console.log(car1.getInfo());

// TASK 5: TEST STATIC COUNTER

console.log(Car.showTotalCars());

const car2 = new Car("Honda", 28000);

console.log(Car.showTotalCars());

// TASK 6: TEST ELECTRIC CAR

const electricCar1 = new ElectricCar("Tesla", 45000, 100);

console.log(electricCar1.batteryRange);

electricCar1.drive();

console.log(electricCar1.batteryRange);

electricCar1.charge();

console.log(electricCar1.batteryRange);

// TASK 7: POLYMORPHISM

const car3 = new Car("BMW", 40000);

const electricCar2 = new ElectricCar("Tesla", 50000, 100);

// Regular Car drive()

car3.drive();

console.log(car3.getInfo());

// Electric Car drive()

electricCar2.drive();

console.log(electricCar2.batteryRange);
