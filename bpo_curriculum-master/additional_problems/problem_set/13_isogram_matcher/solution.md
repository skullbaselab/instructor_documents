## isogramMatcher Walkthrough

<iframe src="https://player.vimeo.com/video/215089336" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


## Solution Code

```js
function isogramMatcher(string1, string2) {
  var lettersSamePos = 0;
  var lettersDiffPos = 0;

  for (var i = 0; i < string1.length; i++) {
    if (string1[i] === string2[i]) {
      lettersSamePos++;
    } else if (string2.indexOf(string1[i]) !== -1) {
      lettersDiffPos++;
    }
  }

  return [lettersSamePos, lettersDiffPos];
}
```
