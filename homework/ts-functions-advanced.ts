// PART 1: TYPED FUNCTIONS

// Task 1: Price Calculator

function calculateTotal(price: number, quantity: number): number {
  return price * quantity;
}

// Task 2: Greeting with Default Parameter

function greetUser(name: string, role: string = "User"): string {
  return `Hello, ${name}! You are a ${role}.`;
}

// Task 3: Void Function

function logMessage(message: string): void {
  console.log(message);
}

// PART 2: PROMISES + ASYNC/AWAIT

// Task 4: Simple Promise

function validatePassword(password: string): Promise<string> {
  return new Promise((resolve, reject) => {
    if (password.length >= 8) {
      resolve("Valid password");
    } else {
      reject("Password too short");
    }
  });
}

// Task 5: Async Function

async function checkPassword(password: string): Promise<void> {
  try {
    const message = await validatePassword(password);
    console.log(message);
  } catch (error) {
    console.log(error);
  }
}

//  PART 3: TYPE ALIASES + UNION TYPES

// Task 6: Literal Type

type OrderStatus = "pending" | "shipped" | "delivered";

let orderStatus: OrderStatus = "pending";

// Task 7: Union Type

type ID = number | string;

let userId: ID = 12345;
let customerId: ID = "ABC123";

//  PART 4: INTERFACES

// Task 8: Basic Interface

interface User {
  id: number;
  name: string;
  email: string;
}

const user: User = {
  id: 1,
  name: "Victoria",
  email: "victoria@example.com",
};

// Task 9: Optional Property

interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
}

const user1: User = {
  id: 2,
  name: "John",
  email: "john@example.com",
};

// Task 10: Extending Interfaces

interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
}

interface Admin extends User {
  role: "admin";
  permissions: string[];
}

const admin: Admin = {
  id: 1,
  name: "Victoria",
  email: "victoria@example.com",
  role: "admin",
  permissions: ["read", "write", "delete"],
};

//  PART 5: PICK & OMIT

// Task 11: Pick

interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
}

type UserPreview = Pick<User, "id" | "name">;

const userPreview: UserPreview = {
  id: 1,
  name: "Victoria",
};

// Task 12: Omit

interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
}

type PublicUser = Omit<User, "email">;

const publicUser: PublicUser = {
  id: 1,
  name: "Victoria",
};

// PART 6: TUPLES

// Task 13: Tuple

type UserTuple = [string, number, boolean];

const user2: UserTuple = ["Victoria", 25, true];

//  FINAL MINI CHALLENGE

// Task 14: Mini Product System

type ID1 = number | string;

type OrderStatus1 = "pending" | "shipped" | "delivered";

interface Product {
  id: ID;
  name: string;
  price: number;
  status: OrderStatus;
  discount?: number;
}

function applyDiscount(product: Product): Product {
  if (product.discount) {
    return {
      ...product,
      price: product.price - product.discount,
    };
  }

  return product;
}

async function processOrder(product: Product): Promise<string> {
  return new Promise((resolve, reject) => {
    if (product.status === "pending") {
      resolve("Order processed");
    } else {
      reject("Order cannot be processed");
    }
  });
}
