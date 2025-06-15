const displayArea = document.getElementById("display");
const equalsButton = document.getElementById("equal");
const clearButton = document.getElementById("btn");
const operatorButtons = document.querySelectorAll(".operator");
const displayOperator = document.getElementById("display-operator");

var num1 = 0;
var num2 = 0;

clearButton.addEventListener("click", () => {
  clear();
});
equalsButton.addEventListener("click", () => {
  //   const num1 = parseFloat(num1Input.value);
  //   const num2 = parseFloat(num2Input.value);

  if (isNaN(num1) || isNaN(num2)) {
    displayArea.textContent = "Please enter valid numbers.";
    return;
  }

  try {
    const result = calculate(num1, num2);
    displayArea.textContent = `${result}`;
  } catch (error) {
    displayArea.textContent = "error";
  }
  num1 = 0;
  num2 = 0;
  operator = "";
});

var operator = "";

function calculate(num1, num2) {
  switch (operator) {
    case "+":
      displayOperator.textContent = "+";
      return num1 + num2;
    case "-":
      displayOperator.textContent = "-";
      return num1 - num2;
    case "*":
      displayOperator.textContent = "*";
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        throw new Error("Division by zero is not allowed.");
      }
      displayOperator.textContent = "/";
      return num1 / num2;
    default:
      throw new Error("Invalid operator. Please use +, -, *, or /.");
  }
}

function assignValue(number) {
  displayArea.textContent = number;
  if (num1 == 0) {
    num1 = number;
  } else if (num2 == 0) {
    num2 = number;
  }
}

function clear() {
  displayArea.textContent = " ";
  displayOperator.textContent = "";
  num1 = 0;
  num2 = 0;
  operator = "";
}
