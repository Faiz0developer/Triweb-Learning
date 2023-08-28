const userChoice = "divisions";
const num1 = 50;
const num2 = 5;
let result;

function add(num1, num2) {
  result = num1 + num2;
  return result;
}

function subtract(num1, num2) {
  result = num1 - num2;
  return result;
}

function multiply(num1, num2) {
  result = num1 * num2;
  return result;
}

function divide(num1, num2) {
  result = num1 / num2;
  return result;
}

if (
  userChoice === "add" ||
  userChoice === "subtract" ||
  userChoice === "multiply" ||
  userChoice === "division"
) {
  console.log(`First number: ${num1}`);
  console.log(`Second number: ${num2}`);
  console.log(`User wants to ${userChoice} two number`);
}

if (userChoice === "add") {
  console.log(`Sum = ${add(num1, num2)}`);
} else if (userChoice === "subtract") {
  console.log(`Subtraction = ${subtract(num1, num2)}`);
} else if (userChoice === "multiply") {
  console.log(`Product = ${multiply(num1, num2)}`);
} else if (userChoice === "division") {
  console.log(`Division = ${divide(num1, num2)}`);
} else console.log("Please Select a valid choice");
