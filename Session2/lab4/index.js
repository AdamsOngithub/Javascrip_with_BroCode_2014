//Ternary operator = it's a shortcut of IF{} and ELSE{} statem
//
// it helps assigning a variable based on a condition
// condition? conditionTrue: conditionFalse;

/*let age = 20;
let message = age >= 18 ? `You're an adult` : `You'r a child`;
console.log(message);*/

/*let time = 14;
let greeting = time > 12 ? `Good afternoon!` : `Good morning!`;
console.log(greeting);*/

/*let isStudent = false;
let message = isStudent ? `You're a student` : `You're NOT a student`;
console.log(message);*/

let purchaseAmount = 120;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(
  `Your total is $${purchaseAmount - purchaseAmount * (discount / 100)}`
);
