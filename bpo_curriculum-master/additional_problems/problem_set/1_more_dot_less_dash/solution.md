## moreDotLessDash Walkthrough

<iframe src="https://player.vimeo.com/video/214575672" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function moreDotLessDash(str) {
  var dotCount = 0;
  var dashCount = 0;

  for (var i = 0; i < str.length; i += 1) {
    var char = str[i];
    if (char === '.') {
      dotCount += 1;
    }
    if (char === '-') {
      dashCount += 1;
    }
  }

  return (dotCount > dashCount);
}
```
