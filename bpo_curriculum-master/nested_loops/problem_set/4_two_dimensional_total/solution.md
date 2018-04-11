## twoDimensionalTotal Walkthrough

<iframe src="https://player.vimeo.com/video/213908390" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function twoDimensionalTotal(array) {
  var total = 0;

  for (var i = 0; i < array.length; i += 1) {
    for (var j = 0; j < array[i].length; j += 1) {
      total += array[i][j];
    }
  }

  return total;
}

```
