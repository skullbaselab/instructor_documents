/*******************************************************************************
Write a function `leastCommonMultiple(num1, num2)` that returns the
lowest number which is a multiple of both inputs.

Examples:

lcm(2, 3) => 6
lcm(6, 10) => 30
lcm(24, 26) => 312
*******************************************************************************/

function leastCommonMultiple(num1, num2) {
  for (var i = 2; true; i++){
    if (i % num1 === 0 && i % num2 === 0) {
      return i // semicolon -AZ
    }
  }
}

// Perfect! -AZ

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = leastCommonMultiple;
