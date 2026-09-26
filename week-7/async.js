//Sync

console.log("Start");
console.log("Processing");
console.log("End");

//Async

console.log("Start");

setTimeout(() => {
  console.log("Processing after 5 seconds");
}, 5000);

console.log("End");

// Create a promise

// Maker: creates the promise

function makeBurger() {
  return new Promise((resolve, reject) => {
    console.log("Making your burger...");

    setTimeout(() => {
      const success = true; //simulate result
      if (success) {
        console.log("Burget ready!");
        resolve("Burger served!");
      } else {
        reject("Burger burnt");
      }
    }, 3000);
  });
}

// Receiver: waits for the promise

async function orderMeal() {
  try {
    const result = await makeBurger(); // receiver waits here
    console.log("Receiver:", result);
    console.log("Enjoy your meal!");
  } catch (error) {
    console.log("Receiver error:", error);
  }
}
await orderMeal();
