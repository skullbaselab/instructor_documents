## firstLastCap Walkthrough

<iframe src="https://player.vimeo.com/video/221328473" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function firstLastCap(sentence) {
  var words = sentence.split(' ');
  var newWords = [];

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var firstChar = word[0].toUpperCase();
    var lastChar = word[word.length - 1].toUpperCase();
    var middleChars = word.slice(1, -1).toLowerCase()
    var newWord = firstChar + middleChars + lastChar;
    newWords.push(newWord);
  }

  return newWords.join(' ');
}
```
