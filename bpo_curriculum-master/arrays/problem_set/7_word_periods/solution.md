## wordPeriods Walkthrough

<iframe src="https://player.vimeo.com/video/221020992" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function wordPeriods(sentence) {
  var words = sentence.split(' ');
  var newWords = [];

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var newWord = word + '.';
    newWords.push(newWord);
  }

  var newSen = newWords.join(' ');
  return newSen;
}
```
