// Task 1

const student = {
  name: "Sebastian",
  age: 10,
  grade: 4,
  favoriteSubject: "Math",
  address: {
    city: "Suwanee",
    state: "Georgia",
  },
};

console.log(student);

// Task 2

const student = {
  name: "Sebastian",
  age: 10,
  grade: 4,
  school: {
    name: "Elementary",
    city: "Suwanee",
  },

  describe() {
    return `${this.name} is ${this.age} years old and goes to ${this.school.name}school.`;
  },
};

console.log(student.describe());

// Task 3

student.age = 11;
console.log(student);

// Task 4

const student = {
  name: "Sebastian",
  age: 10,

  ageInMonths() {
    return this.age * 12;
  },
};

console.log(student.ageInMonths());

// Task 5

console.log(student.name);
console.log(student["age"]);

// Task 6

console.log("name" in student);
console.log("weight" in student);

// Task 7

const result = student.ageInMonths();

console.log(result);

// Task 8

student.favoriteColor = "Green";

console.log(student);

// Task 9

student.age = 11;

console.log(student.age);

// Task 10

delete student.age;

console.log(student);

// Task 11

console.log(Object.keys(student));
console.log(Object.keys(student).includes("name"));

// Task 12

console.log(Object.values(student));
console.log(Object.keys(student).includes("favoriteColor"));

//Task 13

console.log(Object.entries(student));

console.log(Object.entries(student).flat());

// Task 14

const person = {
  name: "Sebastian",
  age: 10,
  address: {
    city: "Suwanee",
    state: "Georgia",
  },
};

console.log(person.address.city);
console.log(person.address.state);

// Task 15

person.address.city = "Buford";
console.log(person.address);
