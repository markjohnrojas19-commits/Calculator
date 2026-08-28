let operator = "";
let operand1 = "";
let operand2 = "";
let buttons = document.getElementById("buttons");
let display = document.getElementById("display");
let backSpace = document.getElementById("Del");

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
    if (target.id === "equal" || target.id === "equals") return;

    if (target === backSpace || target.id === "Del") {
      if (operand2 !== "") {
        operand2 = operand2.slice(0, -1);
        display.textContent = operand2 === "" ? "0" : operand2;
      } else if (operator !== "") {
        operator = operator.slice(0, -1);
        display.textContent = operand1;
      } else if (operand1 !== "") {
        operand1 = operand1.slice(0, -1);
        display.textContent = operand1 === "" ? "0" : operand1;
      }
      return;
    }

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
        if (operator === "" && operand1.length < 10) {
          operand1 += target.id;
        }
        break;
      default:
        if (
          target.id === "+" ||
          target.id === "-" ||
          target.id === "/" ||
          target.id === "*"
        ) {
          if (operand1 !== "" && operator !== "" && operand2 !== "") {
            let result = operate(operator, operand1, operand2);

            // FIX 1: Format chained calculation if it overflows 10 digits
            if (result !== "Error" && result !== null && result.length > 10) {
              result = String(Number(result).toExponential(4));
            }

            operand1 = result;
            operand2 = "";
            operator = target.id;
          }
        }
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
            if (operand2.length < 10) {
              operand2 += target.id;
            }
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
  let equal = document.getElementById("equal");

  equal.addEventListener("click", (event) => {
    if (operand1 !== "" && operator !== "" && operand2 !== "") {
      let result = operate(operator, operand1, operand2);

      // FIX 2: Format final calculation if it overflows 10 digits
      if (result !== "Error" && result !== null && result.length > 10) {
        result = String(Number(result).toExponential(4));
      }

      display.textContent = result;
      operand1 = result;
      operator = "";
      operand2 = "";
    } else {
      console.log("Calculation incomplete");
      display.textContent = "ERROR";
    }
  });
}

updateVariables();
equalOperation();
