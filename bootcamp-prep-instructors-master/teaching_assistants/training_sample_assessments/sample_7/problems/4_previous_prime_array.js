/*******************************************************************************
Write a function previousPrimeArray(array) that takes in an array of numbers.
The function should a return a new array where each prime number is replaced
with the prime number that comes before it. For example the prime number that comes
before 7 is 5.

Examples:

previousPrimeArray([10, 12, 11, 7, 16]); // => [ 10, 12, 7, 5, 16 ]
previousPrimeArray([17, 24, 29, 5, 2, 4]); // => [ 13, 24, 23, 3, null, 4 ]
*******************************************************************************/
// don't know how to get the prime before n
function isEarlierPrime(n) {
    for (var i = n - 1; i > 1; i--) {
      if (isPrime(i) === true) {
        return i;
      break;
    }
  }
}

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  var i = 2;
  while (i < n) {
    if (n % i === 0) {
      return false;
    }
    i++;
  }
  return true;;
}

function previousPrimeArray(array) {
  var newArr = []; //each prime replaced with one before
  for (var i = 0; i < array.length; i++) {
    var num = array[i];
    if (isPrime(num) === false) {
      newArr.push(num);
    } else {
      newArr.push(isEarlierPrime(num));
    }
  }
  return newArr;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = previousPrimeArray;
