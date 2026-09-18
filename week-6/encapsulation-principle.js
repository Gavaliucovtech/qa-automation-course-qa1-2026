class ATM {
  #cashInside = 0; //private

  deposit(amount) {
    if (amount > 0) {
      const finalAmount = this.#applyBonus(amount); // privaye method used
      this.#cashInside += finalAmount;
    }
  }
  withdraw(amount) {
    if (amount > 0 && amount <= this.#cashInside) {
      this.#cashInside -= amount;
      return amount;
    }
    return 0;
  }

  checkBalance() {
    return this.#cashInside;
  }

  // private method
  #applyBonus(amount) {
    // Give a tiny 1% bonus deposits
    return amount + amount * 0.01;
  }
}

const atm = new ATM();
atm.deposit(500);
console.log(atm.checkBalance());

const withdrawn = atm.withdraw(200);
console.log(withdrawn);
console.log(atm.checkBalance());
