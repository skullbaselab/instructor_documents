## wordYeller Walkthrough

<iframe src="https://player.vimeo.com/video/207348655" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function wordYeller(sentence) {
  var yelledWords = [];

  var words = sentence.split(" ");
  var punctuation = ". , ! ? ; :".split(" "); // array of punctuation

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var lastCharacter = word.slice(-1);

    if (punctuation.indexOf(lastCharacter) !== -1) { // if word already has punctuation
      yelledWords.push(word);
    } else {                                         // else the word has no punctuation
      yelledWords.push(word + "!");
    }
  }

  return yelledWords.join(" ");
}
```
