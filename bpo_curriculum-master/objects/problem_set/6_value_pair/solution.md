## valuePair Walkthrough

<iframe src="https://player.vimeo.com/video/213729811" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function valuePair(obj1, obj2, key) {
  var val1 = obj1[key];
  var val2 = obj2[key];
  var arr = [val1, val2];
  return arr;
}
```
