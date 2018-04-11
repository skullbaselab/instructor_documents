// 3/7 specs passed
//
// Hey <name>, find my comments marked with `-AZ`
// On the right track for some of these problems, just some details are missing
// Be sure to check out our solution videos and practice these problems.
//
/*******************************************************************************
Write a function `arrayBuilder(count)` that takes in a count object and returns
an array filled with the appropriate numbers of elements. The order of
the elements in the array does not matter, but repeated elements should be
grouped.

Examples:

arrayBuilder({'cats': 2, 'dogs': 1}); //=> ['cats', 'cats', 'dogs']
arrayBuilder({}); //=> []
*******************************************************************************/

function arrayBuilder(count) {
  var array = [];
  for (var key in count) {
    var ele = count[i]; // `i` is an undefined variable -AZ
    for (var i = 0; i < count[key]; i++) {
      // array.push(key);
    }

    if ()
  }
  return array;
}

// Now that you have these nested loops.
// We need to use the inner loop to push the key a number of teams -AZ

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = arrayBuilder;
