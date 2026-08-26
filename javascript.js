let operator = "";
let operand1 = "";
let operand2 = "";
let buttons = document.getElementById("buttons");
let display = document.getElementById("display");

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
  let n1 = Number(num1);
  let n2 = Number(num2);

  if (operator === "+") {
    let output = add(n1, n2);
    return String(output);
  } else if (operator === "-") {
    let output = subtract(n1, n2);
    return String(output);
  } else if (operator === "*") {
    let output = multiply(n1, n2);
    return String(output);
  } else if (operator === "/") {
    if (n2 === 0) return "Error";
    let output = divide(n1, n2);
    return String(output);
  } else {
    return (output = null);
  }
}

function updateVariables() {
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
            if (operand2 === "") {
              display.textContent = "0";
            }
            operand2 += target.id;
          }
          break;
      }

      if (operand2 !== "") {
        display.textContent = operand2;
      }
    }

    if (target.id === "clear") {
      operand1 = "";
      operand2 = "";
      operator = "";
      display.textContent = "0";
    }
  });
}

function equalOperation() {
  let equal = document.getElementById("=");

  equal.addEventListener("click", (event) => {
    let result = operate(operator, operand1, operand2);

    display.textContent = result;

    operand1 = result;

    operator = "";
    operand2 = "";
  });
}

updateVariables();
equalOperation();
