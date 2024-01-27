//let username = "Damso";

//document.getElementById("myH1").textContent = `Hello Mr.${username}`;
/*let mumber1;
let number2;

document.getElementById("submit").onclick = function () {
  number1 = Number(document.getElementById("input1").value);
  number2 = Number(document.getElementById("input2").value);
  document.getElementById(
    "result"
  ).textContent = `The sum of ${number1} and ${number2} is ${
    number1 + number2
  }`;
};*/

/*const PI = 22 / 7;
let reduis;
let circumference;

reduis = window.prompt("Enter the reduis of a circle?");
reduis = Number(reduis);
circumference = 2 * PI * reduis;
console.log(circumference);*/

/*let reduis;
const PI = 22 / 7;
let circumference;

document.getElementById("submit").onclick = function () {
  reduis = Number(document.getElementById("input").value);
  circumference = 2 * PI * reduis;
  document.getElementById(
    "H1"
  ).textContent = `Enter the reduis of the circle: ${circumference}`;
};*/

const increaseBtn = document.getElementById("increaseBtn");

const decreaseBtn = document.getElementById("decreaseBtn");

const resetBtn = document.getElementById("resetBtn");

const countLabel = document.getElementById("countLabel");

let count = 0;

increaseBtn.onclick = function () {
  count++;
  countLabel.textContent = count;
};

decreaseBtn.onclick = function () {
  count--;
  countLabel.textContent = count;
};

resetBtn.onclick = function () {
  count = 0;
  countLabel.textContent = count;
};
