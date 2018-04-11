## zipArray Walkthrough

<iframe src="https://player.vimeo.com/video/213908365" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function zipArray(arr1, arr2) {
  var zipped = [];

  for (var i = 0; i < arr1.length; i++) {
    var el1 = arr1[i];
    var el2 = arr2[i];
    var pair = [el1, el2];

    zipped.push(pair);
  }

  return zipped;
}
```
