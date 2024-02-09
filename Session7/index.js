// // MAP,FILTER, AND REDUCE FUNCTIOINS

// //MAP FUNCTION
// let numbers = [1, 2, 3, 4, 5, 6];

// //New array of square values

// let squares = numbers.map(square);

// //

// let cubes = numbers.map(cube);

// //Square function

// function square(element) {
//   return Math.pow(element, 2);
// }

// //cube function

// function cube(element) {
//   return Math.pow(element, 3);
// }

// //console.log(squares);
// //console.log(cubes);

// //FILTER FUNCTION

// //New array of even numbers

// let evenNums = numbers.filter(isEven);

// //New array of odd numbers

// let oddNums = numbers.filter(isOdd);

// //Even number function

// function isEven(element) {
//   return element % 2 === 0;
// }

// //Odd number function

// function isOdd(element) {
//   return element % 2 !== 0;
// }
// // console.log(evenNums);
// // console.log(oddNums);

// //REDUCE FUNCTION

// // let's get the sum of the numbers

// //Sum function

// function sum(previous, next) {
//   return previous + next;
// }

// // using reduce function to get the sum

// let total = numbers.reduce(sum);

// //Maximum value function

// function maxValue(previous, next) {
//   return Math.max(previous, next);
// }

// let max = numbers.reduce(maxValue);

// //Minimum value function

// function minValue(previous, next) {
//   return Math.min(previous, next);
// }
// let min = numbers.reduce(minValue);
// // console.log(max);
// // console.log(min);

//Refactoring of the code using arrow function () =>

const numbers = [1, 2, 3, 4, 5, 6];

//MAP function

const squars = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));

//FILTER function

const evenNums = numbers.filter((element) => element % 2 === 0);
const oddNums = numbers.filter((element) => element % 2 !== 0);

//REDUCE function
const total = numbers.reduce((previous, next) => previous + next);
const max = numbers.reduce((previous, next) =>
  previous > next ? previous : next
);
const min = numbers.reduce((previous, next) =>
  previous < next ? previous : next
);

console.log(min, max, total);
console.log(squars);
console.log(cubes);
console.log(evenNums);
console.log(oddNums);
