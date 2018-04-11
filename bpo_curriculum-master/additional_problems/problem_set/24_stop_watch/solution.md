## stopWatch Walkthrough

<iframe src="https://player.vimeo.com/video/211749299" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function showDoubleDigits(num) {
  if (num < 10) {
    return '0' + num;
  } else {
    return String(num);
  }
}

function stopWatch(totalSeconds) {
  var secCount = totalSeconds % 60;
  var minCount = Math.floor(totalSeconds / 60) % 60;
  var hourCount = Math.floor(totalSeconds / 3600);
  var timeStr = showDoubleDigits(hourCount) + ':' + showDoubleDigits(minCount) + ':' + showDoubleDigits(secCount);

  return timeStr;
}
```
