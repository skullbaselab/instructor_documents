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
  var words = sentence.split(' ')
  var longest = null
  for (var i = 0; i < words.length; i++){
   var word = words[i]
   if (longest === null || word.length >= longest.length) {
      longest = words[i];
    }
  }
   return longest
}

// Correct! Nice using the maxValue strategy here.
// Don't forget about your semicolons -AZ

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = longestWord;
