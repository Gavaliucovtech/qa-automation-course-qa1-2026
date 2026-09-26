// Task 1: String Variable

let studentName: string = "Victoria";
let course: string = "Quality Assurance";

// Task 2: Number Variables

let age: number = 25;
let price: number = 9.99;

// Task 3: Boolean Variables

let isStudent: boolean = true;
let isOnline: boolean = false;

// PART 2: THE any TYPE

// Task 4: Flexible Variable

let randomValue: any = "Have a good day!";
randomValue = 20;
randomValue = true;

// PART 3: TYPE INFERENCE

// Task 5: Let TypeScript Guess the Type

let city = "Atlanta";
city = 45;

// PART 4: TYPED ARRAYS

// Task 6: String Array

let carBrands: string[] = ["Chevrolet", "BMW", "Mercedes", "KIA"];

// Task 7: Number Array

let scores: number[] = [1, 2, 3, 4, 5];

// PART 5: TYPED OBJECTS

// Task 8: Simple Object

let user: { name: string; age: number; isAdmin: boolean } = {
  name: "Victoria",
  age: 25,
  isAdmin: true,
};

// Task 9: Product Object

let product: { title: string; price: number; inStock: boolean } = {
  title: "Pencil",
  price: 2,
  inStock: true,
};

// FINAL MINI-CHALLENGE

// Task 10: Real-World Data

let students: {
  name: string;
  age: number;
  isActive: boolean;
}[] = [
  {
    name: "Victoria",
    age: 25,
    isActive: true,
  },
  {
    name: "Ion",
    age: 30,
    isActive: true,
  },
  {
    name: "Mark",
    age: 28,
    isActive: false,
  },
];
