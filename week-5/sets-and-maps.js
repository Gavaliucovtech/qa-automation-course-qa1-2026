const numbers = new Set([1, 2, 3, 3, 4]);
console.log(numbers);

const mySet = new Set();

// Add values

mySet.add("apple");
mySet.add("banana");
mySet.add("apple");

console.log(mySet);

//Check if a value exists

console.log(mySet.has("apple"));
console.log(mySet.has("grape"));

// delete a value

mySet.delete("banana");
console.log(mySet);

// Size of Set

console.log(mySet.size);

// Iterating throught a set

const fruits = new Set(["apple", "banana", "cherry"]);
for (const fruit of fruits) {
  console.log(fruit);
}

// Use case: Removing Dublicates from an array
// Maybe a interview question !!!!! How to remove dublicates????/

const numberss = [1, 2, 2, 3, 4, 4, 5];

const uniqueNumbers = [...new Set(numberss)];
console.log(uniqueNumbers);

// MAPS

const mMap = new Map();
const initialMap = new Map([
  ["name", "Alice"],
  ["age", 30],
]);
const mySecondMap = new Map();

mySecondMap.set("name", "Alice");
mySecondMap.set("age", 25);
mySecondMap.set(true, "This is a boolean key");

console.log(mySecondMap);

const userMap = new Map();

// Add entries
userMap.set("username", "Bob");
userMap.set("role", "admin");

// Retrive value
console.log(userMap.get("username"));

//check if a key exists

console.log(userMap.has("role"));

// delete a key

userMap.delete("role");
console.log(userMap.size);

// Iterating throught a MAP

const studentMap = new Map([
  ["name", "Alice"],
  ["age", 22],
  ["grade", "A"],
]);

// Using for...of

for (const [key, value] of studentMap) {
  console.log(`${key}; ${value}`);
}

// Using object as keys

const user1 = { name: "Alice" };
const user2 = { name: "Bob" };

const userRoles = new Map();
userRoles.set(user1, "admin");
userRoles.set(user2, "editor");

console.log(userRoles.get(user1));
