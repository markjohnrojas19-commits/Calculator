let operator = "";
let operand1 = "";
let operand2 = "";

function add(operand1, operand2) {
  return operand1 + operand2;
}

function subtract(operand1, operand2) {
  return operand1 - operand2;
}

function multiply(operand1, operand2) {
  return operand1 * operand2;
}

function divide(operand1, operand2) {
  return operand1 / operand2;
}

function operate(operator, num1, num2) {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "*") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    if (num2 === 0) return "Error";
    return divide(num1, num2);
  } else {
    return null;
  }
}

function updateVariables() {
  let buttons = document.getElementById("buttons");
  let display = document.getElementById("display");

  buttons.addEventListener("click", (event) => {
    let target = event.target;
    if (target.tagName !== "BUTTON") return;

    switch (target.id) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "0":
        if (operator === "") {
          operand1 += target.id;
        }
        break;
      default:
        if (target.id === "+") {
          if (operator === "") {
            operator += target.id;
          }
        } else if (target.id === "-") {
          if (operator === "") {
            operator += target.id;
          }
        } else if (target.id === "/") {
          if (operator === "") {
            operator += target.id;
          }
        } else if (target.id === "*") {
          if (operator === "") {
            operator += target.id;
          }
        }
        break;
    }

    // This keeps operand1 on the screen safely
    display.textContent = operand1;

    if (operator !== "") {
      if (target.tagName !== "BUTTON") return;

      switch (target.id) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
          if (operator !== "") {
            // ADJUSTMENT: If this is the FIRST click for operand2, flash a "0" string
            if (operand2 === "") {
              display.textContent = "0";
            }
            operand2 += target.id;
          }
          break;
      }

      // If operand2 has a value, show it on the screen instead of operand1
      if (operand2 !== "") {
        display.textContent = operand2;
      }
    }
  });
}

updateVariables();
