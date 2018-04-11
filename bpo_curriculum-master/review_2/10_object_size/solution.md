## objectSize Walkthrough

<iframe src="https://player.vimeo.com/video/213908306" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
// version 1
function objectSize(obj) {
  var count = 0;

  for (var k in obj) {
    count += 1;
  }

  return count;
}

// version 2
function objectSize(obj) {
  return Object.keys(obj).length;
}

```
