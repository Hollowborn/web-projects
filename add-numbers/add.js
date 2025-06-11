const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const addButton = document.getElementById("add");
const result = document.getElementById("result");
const clear = document.getElementById("clear");

clear.addEventListener("click", () => {
  n1.value = "";
  n2.value = "";
  result.value = "";
  console.log("Fields cleared.");
});

addButton.addEventListener("click", () => {
  const num1 = parseFloat(n1.value);
  const num2 = parseFloat(n2.value);

  if (isNaN(num1) || isNaN(num2) || n1.value === "" || n2.value === "") {
    result.value = "Please enter valid numbers.";
    console.error("Invalid input: One or both fields are empty.");
  } else {
    const sum = num1 + num2;
    result.value = `The sum is: ${sum}`;
    console.log(sum);
  }
});
