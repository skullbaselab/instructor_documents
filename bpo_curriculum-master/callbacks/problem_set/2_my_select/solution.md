## mySelect Walkthrough

<iframe src="https://player.vimeo.com/video/210476529" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function mySelect(arr, cb) {
  var selected = [];

  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      selected.push(arr[i]);
    }
  }

  return selected;
}
```
