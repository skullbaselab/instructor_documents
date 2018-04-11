/*******************************************************************************
Write a function disemvowel(string) that takes in a string and returns the
string with all vowels removed.

Examples:

disemvowel('bootcamp'); // => 'btcmp'
disemvowel('PREP'); // => 'PRP'
disemvowel('hello world'); // => 'hll wrld'
*******************************************************************************/

function disemvowel(string) {
  var vowels = 'AEIOIUaeiou'
  for (var i = 0; i < string.length; i++){
    var letter = string[i]

    // check if the vowel is not a vowel, if it's not add it to a new string -AZ

    if (letter.indexOf(vowels) > -1) {
      string.slice()  // slice does not remove characters, it does not modify
                      // the string, since strings are immutable -AZ
    }
  }
  return string
}

console.log(disemvowel('bootcamp')); // => 'btcmp'
console.log(disemvowel('PREP')); // => 'PRP'
console.log(disemvowel('hello world')); // => 'hll wrld')

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = disemvowel;
