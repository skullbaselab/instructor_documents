// 6/7 specs passed
//
// Hey <name>, find my comments marked with -`AZ`
// Nice work! Code is looking strong. Overall your style is good.
// However, I want you to be more consistent with indentation and style

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
  var array = []  //
  for (var key in count) {
    var value = count[key]  //
    for (var i = 0; i < value; i++) {
      // be sure to use indentation -AZ
    array.push(key) // semicolons
    }
  }
  return array  // missing semicolon -AZ
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = arrayBuilder;
