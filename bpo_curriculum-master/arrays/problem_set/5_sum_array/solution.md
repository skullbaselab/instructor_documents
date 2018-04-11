## sumArray

<iframe src="https://player.vimeo.com/video/213574913" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function sumArray(array) {
  var sum = 0;

  for (var i = 0; i < array.length; i += 1) {
    var num = array[i];
    sum += num;
  }

  return sum;
}
```
