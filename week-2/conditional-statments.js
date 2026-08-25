// If

let age = 24;

if (age > 18) {
  console.log("You are above the age limit to enter our website so welcome!!!");
}

// Else If

// let score = 85;
// if (score > 90) {
//   console.log("Grade A");
// } else if (score > 82) {
//   console.log("Grade: B");
// }

//Else

let score = 71;

if (score > 90) {
  console.log("Grade: A");
} else if (score > 82) {
  console.log("Grade: B");
} else if (score > 70) {
  console.log("Barely passing!!!");
} else {
  console.log("You failed!!!");
}

// Switch

let day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
  case 4:
    console.log("Thursday");
  case 5:
    console.log("Friday");
  case 6:
    console.log("Saturday");
  default:
    console.log("Invalid Day");
}
