//For Loop==Repeat some code a LIMITED amount of times

/* let's print hello 3 times

for (let i = 0; i < 3; i++) {
  console.log(`Hello`);
}

//Now! let's print numbers form 1 to 10

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//let's print them in decending order
for (let i = 10; i > 0; i--) {
  console.log(i);
}
 */

//Continus and Break in loops
//in this for loop 10 is skiped out
/* for (let i = 1; i <= 20; i++) {
  if (i === 10) {
    continue;
  }
  console.log(i);
} */

//in this for loop when i=11 it breaks out the loop entirely

/* for (let i = 1; i <= 100; i++) {
  if (i === 11) {
    break;
  }
  console.log(i);
} */

//NUMBER GUESSING GAME
let minNum = 1;
let maxNum = 100;
let answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
let guess;
let runnig = true;
let attempts = 0;

while (runnig) {
  guess = window.prompt(`Guess a number between ${minNum}-${maxNum}`);
  guess = Number(guess);
  if (isNaN(guess)) {
    window.alert("Please enter a valid number!");
  } else if (guess < minNum || guess > maxNum) {
    window.alert("Please enter a valid number!");
  } else {
    attempts++;
    if (guess < answer) {
      window.alert("TOO LOW! TRY AGAING");
    } else if (guess > answer) {
      window.alert("TOO HIGH! TRY AGAIN");
    } else {
      runnig = false;
      window.alert(
        `CORRECT! the answer is ${answer}, it took you ${attempts} attempts`
      );
    }
  }
}
