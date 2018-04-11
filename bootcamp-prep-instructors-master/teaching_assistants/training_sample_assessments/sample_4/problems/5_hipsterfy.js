/*******************************************************************************
Write a function `hipsterfy(sentence)` that takes takes a string containing
several words as input. Remove the last vowel from each word. 'y' is not a vowel.

Examples:

hipsterfy("proper"); // => "propr"
hipsterfy("proper tonic panther"); // => "propr tonc panthr"
hipsterfy("towel flicker banana"); // => "towl flickr banan"
hipsterfy("runner anaconda"); // => "runnr anacond"
hipsterfy("turtle cheeseburger fries"); // => "turtl cheeseburgr fris"
*******************************************************************************/

function removeLastVowel(word) {
  var hipWord = '';
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for (var i = word.length - 1; i > word[0]; i--) {
    var char = word[i];
    if ((vowels[char] !== -1) && (word[char] > word[i])) {
      continue;
    } else {
      hipWord.push(char); //backwards word?
    }
  }
  return hipWord;
}

function hipsterfy(sentence) {
  var hipSentence = '';
  sentence.push(removeLastVowel(word));

  return hipSentence;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = hipsterfy;
