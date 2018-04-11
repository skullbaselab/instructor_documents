## avgValue

<iframe src="https://player.vimeo.com/video/213729859" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function avgValue(array) {
  var total = 0;

  for (var i = 0; i < array.length; i += 1) {
    var num = array[i];
    total += num;
  }

  var avg = total / array.length;
  return avg;
}
```
