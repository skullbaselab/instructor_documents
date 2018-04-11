/*******************************************************************************
Write a function `createExpFunction(pow)` that accepts a positive integer. It returns
a function which will raise its input to the power specified by `pow` and returns
the value.

Example 1:
var powerTwo = createExpFunction(2);
powerTwo(2); // => 4
powerTwo(6); // => 36

Example 2:
var powerThree = createExpFunction(3);
powerThree(2); // => 8
powerThree(6); // => 216

Example 3:
var powerTen = createExpFunction(10);
powerTen(2); // => 1024
powerTen(6); // => 60466176
*******************************************************************************/

function createExpFunction(pow) { // solution 1
  return function (base) {
    return Math.pow(base, pow);
  }
}

function createExpFunction(pow) { // solution 2
  return function (base) {
    var result = base;

    for (var x = 1; x < pow; x++) {
      result *= base;
    }
    return result;
  };
}

/*******************************************************************************
Write a function mapCreator that takes a callback as an argument
and returns a new function. The new function should take an array as an argument
and return a new array, with each element 'mapped' to a new element
using the original callback.

Example:
var squareMapper = mapCreator(function (el) {
  return el * el;
});
squareMapper([1, 2, 3, 4]); //=> [1, 4, 9, 16]
*******************************************************************************/

function mapCreator(callback) {
  return function (arr) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
      var el = arr[i];
      result.push(callback(el));
    }

    return result;
  };
}

/*******************************************************************************
Write a function objectSelect, which takes as arguments an object, and a callback,
and returns a new object where all the key value pairs return true,
when passed into the callback.

Example:
var obj = {
  one: "one",
  two: "something else",
  three: "three",
  four: "another thing."
};
var matchingPairs = objectSelect(obj, function (key, val) {
 return key === val;
});
matchingPairs; //=> {
  one: "one",
  three: "three"
}
*******************************************************************************/

function objectSelect(obj, callback) {
  var resultObj = {};

  for (var key in obj) {
    var val = obj[key];

    if (callback(key, val)) {
      resultObj[key] = val;
    }
  }

  return resultObj;
}
