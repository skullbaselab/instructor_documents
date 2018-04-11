## favoriteWord Walkthrough

<iframe src="https://player.vimeo.com/video/210814361" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function letterCount(word, char) {
  var count = 0;

  for (var i = 0; i < word.length; i += 1) {
    if (word[i] === char) {
      count += 1;
    }
  }

  return count
}

function favoriteWord(favoriteLetter, sentence) {
  var words = sentence.split(' ');
  var fave = '';

  for (var i = 0; i < words.length; i += 1) {
    var word = words[i];
    if (letterCount(fave, favoriteLetter) < letterCount(word, favoriteLetter)) {
      fave = word;
    }
  }

  return fave;
}
```
