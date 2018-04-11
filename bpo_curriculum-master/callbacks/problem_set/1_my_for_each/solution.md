## myForEach Walkthrough

<iframe src="https://player.vimeo.com/video/210476580" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function myForEach(array, cb) {
  for (var idx = 0; idx < array.length; idx += 1) {
    var el = array[idx];
    cb(el, idx, array);
  }
}
```
