## pairProduct Walkthrough

<iframe src="https://player.vimeo.com/video/209436590" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function pairProduct(arr, num) {
  var pairs = [];

  var i = 0;
  while (i < arr.length) {

    var j = i + 1;
    while (j < arr.length) {
      if (arr[i] * arr[j] === num) {
        pairs.push([i, j]);
      }

      j += 1;
    }

    i += 1;
  }

  return pairs;
}
```
