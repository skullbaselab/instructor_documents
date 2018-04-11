## hipsterfy Walkthrough

<iframe src="https://player.vimeo.com/video/209638705" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function hipsterfyWord(word) {
  var vowels = ["a","e","i","o","u"];

  for (var i = word.length - 1; i >= 0; i -= 1) {
    if (vowels.indexOf(word[i]) !== -1) {
      var hipsterWord = word.slice(0, i) + word.slice(i + 1);
      return hipsterWord;
    }
  }

  return word;
}

function hipsterfy(sentence) {
  var hipsterfiedWords = [];
  var words = sentence.split(" ");

  for (var i = 0; i < words.length; i += 1) {
    var word = words[i];
    hipsterfiedWords.push(hipsterfyWord(word));
  }

  var hipsterfiedSentence = hipsterfiedWords.join(" ");
  return hipsterfiedSentence;
}
```
