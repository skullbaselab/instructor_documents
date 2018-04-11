## myEvery Walkthrough

<iframe src="https://player.vimeo.com/video/220544540" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function myEvery(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    var el = arr[i];
    if (cb(el) === false) {
      return false;
    }
  }

  return true;
}
```
