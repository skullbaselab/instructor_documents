## greatestMap Walkthrough

<iframe src="https://player.vimeo.com/video/215089781" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function greatestMap(array, cb1, cb2) {
  var mapped = [];

  for (var i = 0; i < array.length; i += 1) {
    var result1 = cb1(array[i], i, array);
    var result2 = cb2(array[i], i, array);

    if (result1 > result2) {
      mapped.push(result1);
    } else {
      mapped.push(result2);
    }
  }

  return mapped;
}
```
