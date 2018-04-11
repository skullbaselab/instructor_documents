## uncompressStr Walkthrough

<iframe src="https://player.vimeo.com/video/214575553" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function uncompressString(str) {
  var newStr = '';

  for (var i = 0; i < str.length - 1; i += 2) {
    var char = str[i];
    var num = Number(str[i + 1]);

    for (var j = 0; j < num; j += 1) {
      newStr += char;
    }
  }

  return newStr;
}
```
