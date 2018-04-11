## shiftChars Walkthrough

<iframe src="https://player.vimeo.com/video/211376064" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function shiftChars(word, num) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var shifted = '';

  for (var i = 0; i < word.length; i += 1) {
    var char = word[i];
    var index = alphabet.indexOf(char);
    var newIndex = (index + num) % 26;

    shifted += alphabet[newIndex];
  }

  return shifted;
}
```
