/*******************************************************************************
Write a function `isPrime(number)` that returns a boolean indicating if `number`
is prime or not.

Examples:

isPrime(-7): // => false
isPrime(2); // => true
isPrime(11); // => true
isPrime(15); // => false
*******************************************************************************/
function isprime(number) {
  if (number< 2) {
    return false;
  }
  for ( var i = 2; i < number; i +=1) {
    if ( number % 2 === 0 || number % 3 === 0) {
      return false;
    }
  }
  return true;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = isPrime;
