// Literal Types

let success: "success" = "success";
success = "success";

// Union Types

let promiseStatus: "resolved" | "pending" | "rejected";
promiseStatus = "resolved";
promiseStatus = "pending";
promiseStatus = "rejected";

// Type Aliases

// simple type Alias

type ID = number;

let userId = 123;

// Object type Alias

type Car = {
  brand: string;
  model: string;
  year: number;
};

const myCar: Car = {
  brand: "Toyota",
  model: "Prius",
  year: 2020,
};

// Union Type Alias

type Status = "active" | "inactive" | "pending";

let currentStatus: Status = "active";
currentStatus = "inactive";
currentStatus = "pending";

// Interfaces

interface User {
  id: number;
  name: string;
  email: string;
}
const user1: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};

// Extending Interfaces

interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeID: string;
  department: string;
}

const emp: Employee = {
  name: "Bob",
  age: 30,
  employeeID: "E123",
  department: "Engineering",
};

// Optional Properties

interface Product {
  id: number;
  name: string;
  description?: string; //optional because of "?"
}

const product1: Product = { id: 1, name: "Laptop" };
const product2: Product = { id: 2, name: "Ipad", description: "very good" };

// Pick and Omit

// Pick

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

type PublicUser = Pick<User, "id" | "name" | "email">;

const publicUser1: PublicUser = {
  id: 1,
  name: "Alex",
  email: "alex@test.com",
};

// Omit

type PrivateUser = Omit<User, "password">;

const privateUser1: PrivateUser = {
  id: 2,
  name: "Bob",
  email: "bob@example.com",
};

// Tuples

let userData: [number, string, boolean];
userData = [1, "Alice", true];

// userData = ["Alice", 1, true]; -> wrong order

userData.push("Hello"); // This works because tuple is still array at runtime
console.log(userData);

// Make it more strict

let myArray: readonly string[] = ["a", "b", "c", "d"];

// myArray.push("e"); -> will be an error
