## divisibleByThreePairSum Walkthrough

<iframe src="https://player.vimeo.com/video/208725670" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


## Solution Code

```js
function divisibleByThreePairSum(array) {
  var pairs = [];

  for (var i = 0; i < array.length; i += 1) {
    for (var j = i + 1; j < array.length; j += 1) {
      var sum = array[i] + array[j];

      if (sum % 3 === 0) {
        pairs.push([i, j]);
      }
    }
  }

  return pairs;
}
```
