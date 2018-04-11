/*******************************************************************************
Write a function disemvowel(string) that takes in a string and returns the
string with all vowels removed.

Examples:

disemvowel('bootcamp'); // => 'btcmp'
disemvowel('PREP'); // => 'PRP'
disemvowel('hello world'); // => 'hll wrld'
*******************************************************************************/

function isVowel(char) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var letter = char.toLowerCase();

  return (vowels.indexOf(letter) > -1);
}


function disemvowel(string) {
  var newStr = '';

  for (var i = 0; i < string.length; i += 1) {
    var char = string[i];

    if(isVowel(char)) {
      continue;

    } else {
      newStr += char;
    }
  }
  return newStr;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = disemvowel;
