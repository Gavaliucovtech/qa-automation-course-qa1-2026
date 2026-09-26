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
