// Write a function isEven(num) which takes as the argument a number.
// It returns a boolean, true if num is even, and false otherwise.
// Your function must use the given function isOdd in your solution.
// isOdd returns true if its argument is odd and false otherwise.
// Examples:
// isEven(2) => true
// isEven(5) => false
// isEven(-55) => false

function isOdd(num) { // given function
  return (num % 2 !== 0);
}

function isEven(num) {
  // your code here...
}

// Truthy vs Falsey: Evaluate each expression.

true && true || false;

true && (false || true);

(true || false) && (false || false);

(true || false) || (false || false);
