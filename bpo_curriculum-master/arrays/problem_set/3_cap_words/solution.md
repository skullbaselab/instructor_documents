## capWords Walkthrough

<iframe src="https://player.vimeo.com/video/206629380" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


## Solution Code

```js
function capWords(words) {
  var newWords = [];

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var cappedWord = word.toUpperCase();
    newWords.push(cappedWord);
  }

  return newWords;
}
```
