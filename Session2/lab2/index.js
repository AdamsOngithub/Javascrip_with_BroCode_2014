const input = document.getElementById("input");
const submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("result");

let age;

submitBtn.onclick = function () {
  age = input.value;
  age = Number(age);
  if (age >= 100) {
    result.textContent = `You are TOO OLD to vist this site!`;
  } else if (age < 0) {
    result.textContent = `Your age can't be last than 0!`;
  } else if (age >= 18) {
    result.textContent = `You are old enough to vist this site!`;
  } else if (age == 0) {
    result.textContent = `You are just born! Baby`;
  } else {
    result.textContent = `You must be 18+ to visit this site!`;
  }
};
