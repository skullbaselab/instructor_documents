## abbreviate Walkthrough

<iframe src="https://player.vimeo.com/video/214906790" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function removeVowels(word) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var newWord = '';

  for (var i = 0; i < word.length; i += 1) {
    var char = word[i];
    if (vowels.indexOf(char) === -1) {
      newWord += char;
    }
  }

  return newWord;
}

function abbreviate(sentence) {
  var words = sentence.split(' ');
  var newWords = [];

  for (var i = 0; i < words.length; i += 1) {
    var word = words[i];

    if (word.length >= 5) {
      newWords.push(removeVowels(word));
    } else {
      newWords.push(word);
    }
  }

  var newSen = newWords.join(' ');
  return newSen;
}

```
