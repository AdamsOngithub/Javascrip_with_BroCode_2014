//Function=A section of reuseable code,
//Declare once, and use it whenever you want just by calling that function

//let declare a function the return TRUE the number that is passed is even  or FALSE if it's odd

function isEven(number) {
  return number % 2 === 0 ? true : false;
}

//let create some function that carry the arithmetic operation

//Addition
function add(x, y) {
  return x + y;
}

//Substraction
function sub(x, y) {
  return x - y;
}

//Multiplication
function mul(x, y) {
  return x * y;
}

//Division
function div(x, y) {
  return x / y;
}

// Let create a function that checks whether an email is valid or not

function isValidEmail(email) {
  return email.includes("@") ? true : false;
}

/* console.log(isEven(5));
console.log(isEven(10)); */

//console.log(add(5, 2), sub(5, 2), mul(5, 2), div(5, 2));

//

console.log(isValidEmail("BroCode@gmail.com"));
console.log(isValidEmail("BroCodegmail.com"));
