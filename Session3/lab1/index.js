//String slicing= creating a substring from a portion of another string

let fullName = "Hassan Moustapha";
//let firstName = fullName.slice(0, 6);
//let lastName = fullName.slice(6, 16);

//let firstName = fullName.slice(0, 6);
// To exclude the " " you should and 1
//let lastName = fullName.slice(6 + 1, 16);

//But for the last name there is no need to pass the ending position(index of the last postion)

//let firstName = fullName.slice(0, 6);
// To exclude the " " you should and 1
//let lastName = fullName.slice(6 + 1);

//Let's make our code more dynamic
/*let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);
console.log(firstName);
console.log(lastName);*/

//More example

/*const email = "Hassan21@gmail.com";
let username = email.slice(0, email.indexOf("@"));
let extention = email.slice(email.indexOf("@") + 1);
console.log(username, extention);*/

//Mehod Chaining= Calling one method after another method in continuous line of code.

//let username = window.prompt("Ener your name: ");

//-----------NO METHOD CHAINING-------------
/*username = username.trim();
username = username.replaceAll(" ", "");
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();

username = letter + extraChars;

console.log(username);*/

//------------WITH MEHOD CHAINING-------------------
/*username = username.replaceAll(" ", "");
username =
  username.trim().charAt(0).toUpperCase() +
  username.trim().slice(1).toLowerCase();
console.log(username);*/

// Logical operators=is use to combine or manipulate boolean values(True & False);
//                AND = &&
//                OR= ||
//                ONT=!
//let temp = -100;

/*if (temp > 0) {
  console.log("The weather is GOOD!");
} else if (temp <= 30) {
  console.log("The weather is GOOD!");
} else {
  console.log("The weather is BAD!");
}*/

/*if (temp > 0 && temp <= 30) {
  console.log("The weather is GOOD!");
} else {
  console.log("The weather is BAD!");
}*/
//
//let isSunny = true;

/*if (isSunny) {
  console.log("It's SUNNY!");
} else {
  console.log("It's CLOUDY!");
}*/
/*if (!isSunny) {
  console.log("It's CLOUDY!");
} else {
  console.log("It's SUNNY!");
}*/

// = assignment operator
// == comparision operator (comapre if values are equal)
// === strick equality operator (compare if values & datatype are equal)
//!= inequality operator (comapre if value are NOT equal)
//!== strick inequality operator (compare if values and datatype are not equal)

//let PI = 3.14;
// using comparision that will print "That is PI"
/*if (PI == "3.14") {
  console.log("That is PI");
} else {
  console.log("That is NOT PI");
}

// using strick comparision that will print "That is NOT PI"
if (PI === "3.14") {
  console.log("That is PI");
} else {
  console.log("That is NOT PI");
}*/

// using inequality that will print "That is PI"
/*if (PI != "3.14") {
  console.log("That is NOT PI");
} else {
  console.log("That is PI");
}

// using strick inequality that will print "That is NOT PI"
if (PI !== "3.14") {
  console.log("That is NOT PI");
} else {
  console.log("That is  PI");
}*/
