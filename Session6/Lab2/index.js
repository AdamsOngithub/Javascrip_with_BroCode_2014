//CALLBACK function= to call a function in anthor function by passing the function as an argument





sum(displayContent, 1, 5);

function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}

function displayContent(result) {
  document.getElementById("myH1").textContent = result;
}
