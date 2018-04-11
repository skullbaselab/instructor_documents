## reverseHipsterfy Walkthrough

<iframe src="https://player.vimeo.com/video/220369665" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


## Solution Code

```js
function indexOfLastVowel(word) {
  var vowels = 'aeiou';

  for (var i = word.length - 1; i >= 0; i--) {
    var char = word[i];
    if (vowels.indexOf(char) > -1) {
      return i;
    }
  }
}

function revHipWord(word) {
  var vowels = 'aeiou';
  var lastVowelIdx = indexOfLastVowel(word);
  var newWord = '';

  for (var i = 0; i < word.length; i++) {
    var char = word[i];
    if (vowels.indexOf(char) === -1 || i === lastVowelIdx) {
      newWord += char;
    }
  }

  return newWord;
}

function reverseHipsterfy(sentence) {
  var words = sentence.split(' ');
  var newWords = [];

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var newWord = revHipWord(word);
    newWords.push(newWord);
  }

  return newWords.join(' ');
}
```
