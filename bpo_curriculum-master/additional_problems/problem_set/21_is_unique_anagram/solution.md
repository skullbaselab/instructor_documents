## isUniqueAnagram Walkthrough

<iframe src="https://player.vimeo.com/video/211377928" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function isUniqueAnagram(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }

  for (var i = 0; i < word1.length; i += 1) {
    var char = word1[i];

    if (word2.indexOf(char) === -1) {
      return false;
    }
  }

  return true;
}
```
