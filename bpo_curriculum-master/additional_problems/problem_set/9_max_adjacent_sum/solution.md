## maxAdjacentSum Walkthrough

<iframe src="https://player.vimeo.com/video/214901577" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function maxAdjacentSum(array) {
  var largest = null;

  for (var i = 0; i < array.length - 1; i += 1) {
    var sum = array[i] + array[i + 1];

    if (largest === null || sum > largest) {
      largest = sum;
    }
  }

  return largest;
}
```
