/*******************************************************************************
Write a function laligatArray(array) that takes in an array of numbers and returns
a new array where each number is replaced with its laligat sum.

A number's laligat sum is the the sum of all the prime numbers less than or equal
to that number.

For example, the laligat sum of 10 is: 2 + 3 + 5 + 7 = 17

Examples:
laligatArray([10, 11, 20, 15]); // => [ 17, 28, 77, 41 ]
laligatArray([1, 2, 3, 4, 5]); // => [ 0, 2, 5, 5, 10 ]
*******************************************************************************/

function isPrime(number){
  for (var i = 2; i < number; i++) {
    // Braces here are not correctly matched.
    // This is why indentation is s important. Make it priority. -AZ
  if (number % i === 0) {
    return false
  } else {
    return true // we should return true only after the for loop -AZ
  }
}

function laligatArray(array) {
  var answerarr = []
  for (var i = 0; i < array.length; i++){
    var answer = 0
    var number = array[i]
    for (var j = 2; j <= number; j++){
      if (isPrime(j) === false){  // this is adding the number if it is not prime?
        answer += j               // use the question to guide your code.
      }                           // laligatSum is the sum of primes. -AZ
      answerarr.push(answer)
    }
  }
  return answerarr
}

// Decompose this problem fully into isPrime -> laligatSum -> laligatArray
// -AZ

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = laligatArray;
