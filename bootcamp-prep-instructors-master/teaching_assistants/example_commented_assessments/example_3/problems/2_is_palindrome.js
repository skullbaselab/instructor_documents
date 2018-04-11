/*******************************************************************************
Write a function isPalindrome(sentence) that returns true if the characters of the
sentence string form a palindrome, false otherwise. A palindrome is a word or
phrase that is that is the same forwards and backwards.

Examples:

isPalindrome('rats live on no evil star'); // => true
isPalindrome('stella won no wallets'); // => true
isPalindrome('racecar'); // => true
isPalindrome('hello world'); // => false
*******************************************************************************/

function isPalindrome(sentence) {
  var answer1 = []  // semicolons!s -AZ
  var answer2 = []
  var combined = sentence.split(' ').join('')
  for (var i = 0; i < combined.length; i++){
    var char1 = combined[i];
    answer1.push(char1);

  }
  for (var j = combined.length-1; j >= 0; j--){
    var char2 = combined[j];
    answer2.push(char2);


}
var answer1 = answer1.join('')  // no need to use the var keyword, since you
                                // declared these variables previously -AZ
var answer2 = answer2.join('')

  if (answer1 === answer2){
    return true
  } else {
    return false
  }
}

// Correct but we need to be consistent with indentation. Here is how to correctly indent:

function isPalindrome(sentence) {
  var answer1 = []  // semicolons!s -AZ
  var answer2 = []
  var combined = sentence.split(' ').join('')
  for (var i = 0; i < combined.length; i++){
    var char1 = combined[i];
    answer1.push(char1);
  }
  for (var j = combined.length-1; j >= 0; j--){
    var char2 = combined[j];
    answer2.push(char2);
  }
  var answer1 = answer1.join('')
  var answer2 = answer2.join('')

  if (answer1 === answer2){
    return true
  } else {
    return false
  }
}
// -AZ






/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = isPalindrome
