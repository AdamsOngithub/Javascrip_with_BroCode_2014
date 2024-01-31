function rollDice() {
  const numOfDice = document.getElementById("numOfDice").value;
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");

  let values = [];
  let images = [];

  for (let i = 0; i < numOfDice; i++) {
    let value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(
      `<image src="dice_images/${value}.png" id="image" alt="dice ${value}">`
    );
  }

  diceResult.textContent = values.join(", ");
  diceImages.innerHTML = images.join("");
}
