// ARITHMETIC FUNCTIONS

// add(a, b) takes numbers (or number Strings) and adds them
function add(a, b) {
  return round(parseFloat(a) + parseFloat(b));
}

// subtract(a, b) takes numbers (or number Strings) and returns their difference
function subtract(a, b) {
  return round(parseFloat(a) - parseFloat(b));
}

// multiply(a, b) multiplies two numbers
function multiply(a, b) {
  return round(parseFloat(a) * parseFloat(b));
}

// divide(a, b) divides a by b
//   checks for division by zero, returns an error msg directly if caught
function divide(a, b) {
  b = parseFloat(b);
  if(b === 0) {
    return 'BOOM';
  }
  return round(parseFloat(a) / b);
}

// round(num) returns num rounded to two decimal places
function round(num) {
  return Math.round(num * 100) / 100;
}


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


// CALCULATOR VARS

let firstNum;
let operator;
let secondNum;

let displayString = "";


// CALCULATOR ELEMENTS

const displayContent = document.querySelector('#display-content');

const operators = document.querySelectorAll('.op');
const digits = document.querySelectorAll('.digit');

const clear = document.querySelector('#btn-clear');
const equals = document.querySelector('#btn-equals');

const decimal = document.querySelector('#btn-decimal');
const backspace = document.querySelector('#btn-del');

let opElement = undefined;


// NUMERIC CONSTANTS

const DISPLAY_MAX_LEN = 11;


// BUTTON FUNCTIONS

// updateDisplay replaces current contents of display with the contents of displayString
let updateDisplay = function() {
  if(displayString.length > DISPLAY_MAX_LEN) {
    displayString = displayString.slice(0, DISPLAY_MAX_LEN);
  }
  displayContent.innerText = displayString;
}

// writeButtonToDisplay allows an element to append its content to the display when used as a callback function
let writeButtonToDisplay = function() {
  displayString += this.innerText;
  updateDisplay();
}

// displayToNum saves contents of display into the specified storage variable
let displayToNum = function(variable) {
  switch(variable) {
    case 'firstNum': {
      firstNum = parseFloat(displayString);
      displayString = "";
      return;
    }
    case 'secondNum': {
      secondNum = parseFloat(displayString);
      displayString = "";
      return;
    }
    default: {
      console.log("No such variable to store to.");
      return;
    }
  }
}

// numToDisplay sends contents of provided var to display without saving a copy
let numToDisplay = function(variable) {
  switch(variable) {
    case 'firstNum': {
      displayString = firstNum + "";
      firstNum = "";
      return;
    }
    case 'secondNum': {
      displayString = secondNum + "";
      secondNum = "";
      return;
    }
    default: {
      console.log("No such variable to retrieve from.");
      return;
    }
  }
}

// selectOperator saves the current display value and picks an operator
//   to use for the next calculation
let selectOperator = function(op) {
  op.classList.add('selected');
  operator = op.innerText;
  opElement = op;
}

// deselectOperator unselects operator visually and in storage
let deselectOperator = function() {
  operators.forEach((item) => item.classList.remove('selected'));
  operator = "";
  opElement = undefined;
}

// clearCalculator wipes out all existing data and empties the display
let clearCalculator = function() {
  firstNum = "";
  secondNum = "";

  displayString = "";
  updateDisplay();

  deselectOperator();
}

// equalsFunction handles everything that occurs after pressing the equals sign
let equalsFunction = function() {
  if((firstNum === '') || !operator) {
    // do nothing
  } else {
    // perform the operation
    displayToNum('secondNum');
    displayString = operate(firstNum, operator, secondNum) + "";
    updateDisplay();  
    
    if(displayString === "BOOM") {
      displayString = "";
      firstNum = "";
      secondNum = "";
      deselectOperator();
      return;
    }

    // update data vars
    firstNum = parseFloat(displayString);     // can't use displayToNum('firstNum') here bc it erases the screen contents
    secondNum = "";

    // deselect the operator
    deselectOperator();
  }
}

// opFunction handles all functionality for selecting and chaining operators
let opFunction = function() {

  // empty calculator
  if(!operator && !displayString)
    return 0;
  
  // start of calculation
  if(!operator) {
    selectOperator(this);
    displayToNum('firstNum');
    return;
  }
  
  // switch operators
  if((this !== opElement) && !displayString) {
    deselectOperator();
    selectOperator(this);
    return;
  }

  // toggle/unselect operator
  if((this === opElement) && !displayString) {
      deselectOperator();
      numToDisplay('firstNum');
      return;
  }
  
  // chain operators
  if(operator && displayString && (firstNum !== '')) {
    displayToNum('secondNum');
    displayString = operate(firstNum, operator, secondNum) + "";
    updateDisplay();
    
    if(displayString === "BOOM") {
      displayString = "";
      firstNum = "";
      secondNum = "";
      deselectOperator();
      return;
    }

    deselectOperator();
    selectOperator(this);
    displayToNum('firstNum');
  }

}



// BUTTON EVENT LISTENERS

digits.forEach((button) => {
  button.addEventListener('click', writeButtonToDisplay)
});

operators.forEach((button) => {
  button.addEventListener('click', opFunction);
})

clear.addEventListener('click', clearCalculator);
equals.addEventListener('click', equalsFunction);

decimal.addEventListener('click', () => {
  if(displayString.indexOf('.') == -1) {
    displayString += '.';
    updateDisplay();
  }
});

backspace.addEventListener('click', () => {
  displayString = displayString.slice(0, (displayString.length-1));
  updateDisplay();
});