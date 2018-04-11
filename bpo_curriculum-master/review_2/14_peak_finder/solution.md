## peakFinder Walkthrough

<iframe src="https://player.vimeo.com/video/208725705" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function peakFinder(array) {
  var peaks = [];

  for (var i = 0; i < array.length; i += 1) {
    var point = array[i];
    var before = array[i - 1];
    var after = array[i + 1];

    if (i === 0 && point > after) {
      peaks.push(i);
    } else if ((i === array.length - 1) && (point > before)) {
      peaks.push(i);
    } else if ((point > before) && point > after) {
      peaks.push(i);
    }
  }

  return peaks;
}

```
