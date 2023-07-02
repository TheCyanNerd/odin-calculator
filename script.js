
// add(a, b) takes numbers (or number Strings) and adds them
function add(a, b) {
  a = (typeof a == 'number') ? a : parseInt(a);
  b = (typeof b == 'number') ? b : parseInt(b);
  return a + b;
}

// subtract(a, b) takes numbers (or number Strings) and returns their difference
function subtract(a, b) {
  a = (typeof a == 'number') ? a : parseInt(a);
  b = (typeof b == 'number') ? b : parseInt(b);
  return a - b;
}

// multiply(a, b) multiplies two numbers
function multiply(a, b) {
  a = (typeof a == 'number') ? a : parseInt(a);
  b = (typeof b == 'number') ? b : parseInt(b);
  return a * b;
}

// divide(a, b) divides a by b
//   checks for division by zero, returns an error msg directly if caught
function divide(a, b) {
  a = (typeof a == 'number') ? a : parseInt(a);
  b = (typeof b == 'number') ? b : parseInt(b);
  if(b === 0) {
    return 'BOOM';
  }
  return a / b;
}
