// user input from prompt
function add(a, b) {
  console.log(a + b);
}
// let x = parseInt(prompt("Enter first digit"));
// let y = parseInt(prompt("Enter second digit"));

// add(x, y);

//user input using html input box

function addInputs(n1, n2) {
  console.log(n1 + n2);
}

function btnListener() {
  let n1 = parseInt(document.getElementById("num1").value);
  let n2 = parseInt(document.getElementById("num2").value);
  addInputs(n1, n2);
}

document.getElementById("btn").addEventListener("click", btnListener);
