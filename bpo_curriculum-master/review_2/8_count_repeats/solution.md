## countRepeats Walkthrough

<iframe src="https://player.vimeo.com/video/212979263" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function charCount(str) {
  var count = {};

  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (count[char] === undefined) {
      count[char] = 1;
    } else {
      count[char]++;
    }
  }

  return count;
}

function countRepeats(string) {
  var count = charCount(string);
  var numRepeats = 0;

  for (var char in count) {
    if (count[char] > 1) {
      numRepeats++;
    }
  }

  return numRepeats;
}
```
