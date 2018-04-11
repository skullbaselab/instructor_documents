## pairToString Walkthrough

<iframe src="https://player.vimeo.com/video/215089909" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function pairsToString(arr) {
  var str = '';

  for (var i = 0; i < arr.length; i += 1) {
    var pair = arr[i];
    var char = pair[0];
    var num = pair[1];
    for (var j = 0; j < num; j += 1) {
      str += char;
    }
  }

  return str;
}
```
