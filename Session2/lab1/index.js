//Math= built-in object that provides a collections of properties and methods

//let x = 1;
//let y = 3;
//let z = 2;

//z = Math.PI;
//z = Math.floor(x);
//z = Math.ceil(x);
//z = Math.round(x);
//z = Math.sin(x);
//z = Math.cos(x);
//z = Math.tan(x);
//z = Math.sqrt(y);
//z=Math.abs(x);
//z=Math.trunc(x);
//let max = Math.max(x, y, z);
//let min = Math.min(x, y, z);
//console.log(max, max - min, min);

//RANDAM NUMBER GENERATOR

const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const myButton = document.getElementById("myButton");
let randomNumber1 = 0;
let randomNumber2 = 0;
let randomNumber3 = 0;

let max = 6;
let min = 1;

myButton.onclick = function () {
  randomNumber1 = Math.floor(Math.random() * max) + min;
  randomNumber2 = Math.floor(Math.random() * max) + min;
  randomNumber3 = Math.floor(Math.random() * max) + min;

  label1.textContent = randomNumber1;
  label2.textContent = randomNumber2;
  label3.textContent = randomNumber3;
};
