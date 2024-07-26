const calculator = document.getElementById("calculator");
const display = document.getElementById("display");

const buttons = document.querySelectorAll(".btn");

let operationArray = [];

calculator.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn")) {
    const buttonValue = event.target.innerText;
    console.log(buttonValue);
    handleButtonClick(buttonValue);
  }
});

document.addEventListener("keydown", (event) => {
  const key = event.key;

  // Check if the key is a number or operator
  if (
    isNumber(key) ||
    isOperator(key) ||
    key === "Backspace" ||
    key === "Enter" ||
    key === "."
  ) {
    // Handle special keys
    if (key === "Enter") {
      handleButtonClick("=");
    } else if (key === "Backspace") {
      handleButtonClick("⌦");
    } else {
      handleButtonClick(key);
    }
  }
});

function handleButtonClick(value) {
  if (isNumber(value)) {
    handleNumber(value);
  } else if (isOperator(value)) {
    handleOperator(value);
  } else if (value === "=") {
    handleEquals();
  } else if (value === "AC") {
    handleClear();
  } else if (value === "⌦") {
    console.log("Erase triggered");
    handleErase();
  }

  updateDisplay();
}

function isNumber(value) {
  return (!isNaN(value) || value === ".") && value !== " ";
}

function isOperator(value) {
  return ["+", "-", "*", "/", "%"].includes(value);
}

function handleNumber(value) {
  if (
    operationArray.length === 0 ||
    isOperator(operationArray[operationArray.length - 1])
  ) {
    operationArray.push(value);
  } else if (isNumber(operationArray[operationArray.length - 1])) {
    operationArray[operationArray.length - 1] += value;
  }

  console.log(operationArray);
}

function handleOperator(value) {
  if (
    operationArray.length === 0 ||
    isOperator(operationArray[operationArray.length - 1])
  ) {
    return;
  }
  operationArray.push(value);
  console.log(operationArray);
}

function performCalculation() {
  let expression = operationArray.join("");
  try {
    let result = eval(expression);
    operationArray = [result.toString()];
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

function handleEquals() {
  performCalculation();
}

function handleClear() {
  operationArray = [];
  display.innerText = operationArray.join("");
}

function handleErase() {
  if (operationArray.length === 0) return;

  const lastItem = operationArray[operationArray.length - 1];
  if (lastItem.length > 1) {
    operationArray[operationArray.length - 1] = lastItem.slice(0, -1);
  } else {
    operationArray.pop();
  }
}

function updateDisplay() {
  display.innerText = operationArray.join("");
  
}
