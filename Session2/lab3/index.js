const checkBox = document.getElementById("checkBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const submit = document.getElementById("submit");
const subResult = document.getElementById("subResult");
const paymentType = document.getElementById("paymentType");

submit.onclick = function () {
  if (checkBox.checked) {
    subResult.textContent = `You are subscribed!`;
  } else {
    subResult.textContent = `You are NOT subscribe!`;
  }

  if (visaBtn.checked) {
    paymentType.textContent = `You are paying wih visa`;
  } else if (masterCardBtn.checked) {
    paymentType.textContent = `You are paying with masterCard`;
  } else if (payPalBtn.checked) {
    paymentType.textContent = `You are paying with payPal`;
  } else {
    paymentType.textContent = `You must select a payment method`;
  }
};
