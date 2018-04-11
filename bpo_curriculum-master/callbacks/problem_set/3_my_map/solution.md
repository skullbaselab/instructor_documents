## myMap Walkthrough

<iframe src="https://player.vimeo.com/video/210476555" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function myMap(arr, cb) {
  var mapped = [];

  for (var i = 0; i < arr.length; i++) {
    mapped.push(cb(arr[i], i, arr));
  }

  return mapped;
}
```
