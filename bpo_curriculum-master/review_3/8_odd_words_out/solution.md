## oddWordsOut Walkthrough

<iframe src="https://player.vimeo.com/video/214076385" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function oddWordsOut(sentence) {
  var words = sentence.split(' ');
  var newWords = [];

  for (var i = 0; i < words.length; i += 1) {
    var word = words[i];

    if (word.length % 2 === 0) {
      newWords.push(word);
    }
  }

  return newWords.join(' ');
}
```
