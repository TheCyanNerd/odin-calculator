
// add(a, b) takes numbers (or number Strings) and adds them
function add(a, b) {
  a = (typeof a == 'number') ? a : parseInt(a);
  b = (typeof b == 'number') ? b : parseInt(b);
  return a + b;
}