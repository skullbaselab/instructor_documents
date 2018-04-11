## tripletSum Walkthrough

<iframe src="https://player.vimeo.com/video/220369616" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function tripletSum(array, sum) {
  var triplets = [];

  for (var i = 0; i < array.length; i++) {
    var num1 = array[i];

    for (var j = i + 1; j < array.length; j++) {
      var num2 = array[j];

      for (var k = j + 1; k < array.length; k++) {
        var num3 = array[k];

        if (num1 + num2 + num3 === sum) {
          triplets.push([num1, num2, num3]);
        }
      }
    }
  }

  return triplets;
}
```
