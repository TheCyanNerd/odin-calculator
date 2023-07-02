// ARITHMETIC FUNCTIONS

// add(a, b) takes numbers (or number Strings) and adds them
function add(a, b) {
  return parseFloat(a) + parseFloat(b);
}

// subtract(a, b) takes numbers (or number Strings) and returns their difference
function subtract(a, b) {
  return parseFloat(a) - parseFloat(b);
}

// multiply(a, b) multiplies two numbers
function multiply(a, b) {
  return parseFloat(a) * parseFloat(b);
}

// divide(a, b) divides a by b
//   checks for division by zero, returns an error msg directly if caught
function divide(a, b) {
  b = parseFloat(b);
  if(b === 0) {
    return 'BOOM';
  }
  return parseFloat(a) / b;
}


// DISPLAY VARS

let firstNum;
let operator;
let secondNum;
