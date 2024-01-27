//While Loop = repeat some code while some condition is ture

//let username;

//if (username === " ") {
//console.log("You didn't your username!");
//} else {
//  console.log(`Hello ${username}`);
//}
////////Username can only be undefined in case of do while loop
// but it's left undefined the username=undefined
/*while (username === "" || username === null) {
  username = window.prompt(`Enter your name?`);
}
console.log(`Hello ${username}`);*/

/*do {
  username = window.prompt(`Enter your name?`);
} while (username === "" || username === null);
console.log(`Hello ${username}`);*/

// Example 2:

/* let loggedIn = true;
let username;
let password; */

/*while (!loggedIn) {
  username = window.prompt(`Enter your username?`);
  password = window.prompt(`Enter your password?`);
  if (username === "myUsername" && password === "myPassword") {
    loggedIn = true;
    console.log(`You are logged in!`);
  } else {
    console.log(`Invalid credentials! Please try again`);
  }
}*/

/*do {
  username = window.prompt(`Enter your username?`);
  password = window.prompt(`Enter your password?`);
  if (username === "myUsername" && password === "myPassword") {
    loggedIn = true;
    console.log(`You are logged in!`);
  } else {
    console.log(`Invalid credentials! Please try again`);
  }
} while (!loggedIn);*/
