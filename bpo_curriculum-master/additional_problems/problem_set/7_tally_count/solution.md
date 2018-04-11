## tallyCount Walkthrough

<iframe src="https://player.vimeo.com/video/214723650" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function tallyCount(arr) {
  var tally = {};

  for (var i = 0; i < arr.length; i++) {
    var s = arr[i];
    if (tally[s] === undefined) {
      tally[s] = 'I';
    } else {
      tally[s] += 'I';
    }
  }

  return tally;
}
```
