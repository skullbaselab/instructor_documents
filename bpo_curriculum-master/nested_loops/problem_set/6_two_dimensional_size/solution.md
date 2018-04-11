## twoDimensionalSize Walkthrough

<iframe src="https://player.vimeo.com/video/213908325" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function twoDimensionalSize(array) {
  var size = 0;

  for (var i = 0; i < array.length; i += 1) {
    var subArray = array[i];
    size += subArray.length;
  }

  return size;
}

```
