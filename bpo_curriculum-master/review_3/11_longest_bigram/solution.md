## Solution Code

```js
function longestBigram(sentence) {
  var words = sentence.split(' ');
  var longest = '';

  for (var i = 0; i < words.length - 1; i += 1) {
    var word1 = words[i];
    var word2 = words[i + 1];
    var bigram = word1 + ' ' + word2;

    if (bigram.length > longest.length) {
      longest = bigram;
    }
  }

  return longest;
}
```
