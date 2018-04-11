## maxValue

<iframe src="https://player.vimeo.com/video/206629452" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


## Solution Code

```js
function maxValue(numbers) {
  var largest = null;

  for (var i = 0; i < numbers.length; i += 1) {
    var num = numbers[i];

    if (largest === null || num > largest) {
      largest = num;
    }
  }

  return largest;
}
```
