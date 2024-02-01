// RANDOM PASSWORD GENERATOR

const length = document.getElementById("Lenght").value;
const includeLowecase = document.getElementById("includeLowercase");
const includeUppercase = document.getElementById("includeUppercase");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");
const result = document.getElementById("result");

function GeneratePassword() {
  const lowercaseSet = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "1234567890";
  const symbolsSet = "!@#$%^&*()_+~=";
  let password = "";
  let allowedChars = "";
  allowedChars += includeLowecase.checked ? lowercaseSet : "";
  allowedChars += includeUppercase.checked ? uppercaseSet : "";
  allowedChars += includeNumbers.checked ? numbers : "";
  allowedChars += includeSymbols.checked ? symbolsSet : "";
  if (length <= 0) {
    password += `(Password must be at least 1)`;
  }
  if (allowedChars.length === 0) {
    password += `(At least 1 set of characters need to be selected)`;
  }

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  result.textContent = `Generated Password: ${password}`;
}
