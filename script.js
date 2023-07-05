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

let displayString;


// CALCULATOR FUNCTIONS

// operate(first, op, second) takes in two numbers and an operator,
//    then calls the corresponding arithmetic function
function operate(first, op, second) {
  let result;
  switch (op) {
    case '+':
      result = add(first, second);
      break;
    case '-':
      result = subtract(first, second);
      break;
    case '*':
      result = multiply(first, second);
      break;
    case '/':
      result = divide(first, second);
      break;
    default:
      break;
  }
  return result;
}





// BUTTON FUNCTIONS

// updateDisplay replaces current contents of display with the contents of displayString
let updateDisplay = function() {
  const displayContent = document.querySelector('#display-content');
  displayContent.innerText = displayString;
}

// writeButtonToDisplay allows an element to append its content to the display when used as a callback function
let writeButtonToDisplay = function() {
  displayString += this.innerText;
  updateDisplay();
}