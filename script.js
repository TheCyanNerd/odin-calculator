
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
