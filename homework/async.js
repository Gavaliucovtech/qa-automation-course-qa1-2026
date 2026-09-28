// PART 1: CALLBACKS

// Task 1: Callback Greeting

function prepareGreeting(callback) {
  console.log("Hello World!...");

  setTimeout(() => {
    callback("Hello, your greeting is ready!");
  }, 2000);
}

function callprepareGreeting(message) {
  console.log(message);
}

prepareGreeting(callprepareGreeting);

// PART 2: PROMISE BASICS

// Task 2: Create a Promise

function makePizza() {
  let pizzaAvailable = true;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (pizzaAvailable) {
        resolve("Pizza is ready");
      } else {
        reject("No ingredients");
      }
    }, 2000);
  });
}

makePizza()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

// Task 3: Promise with Number Check

function checkNumber(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num % 2 === 0) {
        resolve("Even number");
      } else {
        reject("Odd number");
      }
    }, 1000);
  });
}

checkNumber(10)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

// PART 3: ASYNC/AWAIT

// Task 4: Async Breakfast

function makeCoffee() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Coffee is ready");
    }, 2000);
  });
}

async function startMorning() {
  const result = await makeCoffee();

  console.log(result);
  console.log("Morning started");
}

startMorning();

// PART 4: TRY…CATCH

// Task 5: Async Error Handling

function makeSandwich(hasBread) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (hasBread) {
        resolve("Sandwich is ready");
      } else {
        reject("No bread available");
      }
    }, 1000);
  });
}

async function prepareLunch() {
  try {
    const result = await makeSandwich(false);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

prepareLunch();

// PART 5: PROMISE.ALL

// Task 6: Parallel Tasks

function washCar() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Car finished");
      resolve();
    }, 2000);
  });
}

function cleanRoom() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Room finished");
      resolve();
    }, 1000);
  });
}

function doLaundry() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Laundry finished");
      resolve();
    }, 3000);
  });
}

async function startChores() {
  await Promise.all([washCar(), cleanRoom(), doLaundry()]);

  console.log("All chores done");
}

startChores();

// FINAL MINI-CHALLENGE

// Task 7: Full Dinner Sequence

function cookRice() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Rice is ready");
    }, 2000);
  });
}

function cookChicken() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Chicken is ready");
    }, 3000);
  });
}

function makeSalad() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Salad is ready");
    }, 1000);
  });
}

async function makeDinner() {
  const results = await Promise.all([cookRice(), cookChicken(), makeSalad()]);

  results.forEach((result) => {
    console.log(result);
  });

  console.log("Dinner is ready!");
}

makeDinner();
