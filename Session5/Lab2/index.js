// spread operator= ... allows an iterable such as
// array or string to be expanded into seperate elements

/* let numbers = [1, 2, 3, 4, 5];
//this will return NaN because it's an array
// let maximum=Math.max(numbers);
//but usnig the spread operator that will work
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);
console.log(maximum, minimum); */

/* //Another example
let username = "Bro Code";
// we can use join method to join the letters togethor

let letters = [...username].join("-");

console.log(letters); */

// Sallow cope of fruits array
let fruits = ["apple", "orange", "banana"];
let newFruits = [...fruits];

console.log(newFruits);

// let combine two arrays together
let vegetables = ["carrots", "celery", "potatoes"];

newFruits = [...fruits, ...vegetables];
console.log(newFruits);
