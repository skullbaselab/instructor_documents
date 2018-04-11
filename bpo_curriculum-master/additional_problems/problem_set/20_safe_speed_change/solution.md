## safeSpeedChange Walkthrough

<iframe src="https://player.vimeo.com/video/228423735" width="100%" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


## Solution Code

```js
function safeSpeedChange(speeds) {

  for (var i = 0; i < speeds.length - 1; i += 1) {
    var diff = speeds[i + 1] - speeds[i];

    if (Math.abs(diff) > 5) {
      return false;
    }
  }

  return true;
}
```
