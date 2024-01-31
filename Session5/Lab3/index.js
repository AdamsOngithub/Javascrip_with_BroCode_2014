//rest parameters= (...rest) allow a function work with a variable number of arguments by bundling them into an array
// spread = expands an array into seperate elements
// rest = bundle seperate elements into an array

/* const food1 = "pizza";
const food2 = "hotdog";
const food3 = "hamburger";
const food4 = "sushi";

//rest parameter function

function getFood(...foods) {
  console.log(foods);
}

getFood(food1, food2, food3, food4);


//rest and spread operator combine in one function openFrige();

function openFrige(...foods) {
  console.log(...foods);
}

openFrige(food1, food2, food3, food4); */

// Example 2

// A function the will some numbers togeter
/* 
function sum(...numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

console.log(sum(1, 2, 3)); */

// let get the average of a set of numbers

/* function getAverage(...numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum / numbers.length;
}

console.log(getAverage(1, 2, 3));   */

// let get full name of a user

function getFullName(...strings) {
  return strings.join(" ");
}

console.log(getFullName("Mr.", "BroCode", "III"));
