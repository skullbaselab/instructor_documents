/*******************************************************************************
Write a function longestWord(sentence) that retuns the longest word of a sentence.
If there are ties, the function should return the later word.

Examples:

longestWord('app academy is cool'); // => 'academy'
longestWord('hate having hungry hippos'); // => 'hippos'
longestWord('bootcamp'); // => 'bootcamp'
longestWord(''); // => ''
*******************************************************************************/

function longestWord(sentence) {
  // var words = sentence.split(' '); // we need to target the words in the sentence
  var longWord = '';
  for (var i = 0; i < sentence.length; i++) {
    var word = sentence[i]; // this is iterating over every character of the sentence -AZ
    if (word.length > longWord.length ) {
      longWord += word;
    }
  }
  return longWord;
}

// Very close, however we should iterate over every word of the sentence.
// The strategy is good though! -AZ

console.log(longestWord('app academy is cool')); // => 'academy'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = longestWord;
