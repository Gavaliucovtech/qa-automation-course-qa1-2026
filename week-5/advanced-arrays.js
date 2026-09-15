const numbers = [3, 6, 9, 12, 15];

// map() transforms each element and return a new array

const tripledNumber = numbers.map((num) => num * 3);
// const tripleNumberTwo = numbers.map(function (num) {
return num * 3;
// });

console.log(tripledNumber);
// console.log(tripleNumberTwo);

function multiplyNumbersByThree(arrNumbers) {
  const multipliedArray = [];

  for (let i = 0; i < arrNumbers.lenght; i++) {
    const multipliedValue = arrNumbers[i] * 3;
    multipliedArray.push(multipliedValue);
  }
  return multipliedArray;
}

const myTripledArrayNumbers = multiplyNumbersByThree(numbers);
console.log(myTripledArrayNumbers);
