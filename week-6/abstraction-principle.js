class CoffeeMachine {
  makeCoffee() {
    this.#boilWater();
    this.#brew();
    console.log("Coffee ready!");
  }
  #boilWater() {
    /* complex logic */
  }
  #brew() {
    /* complex logic */
  }
}
const machine = new CoffeeMachine();
machine.makeCoffee();
