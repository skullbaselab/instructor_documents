## elementCount Walkthrough

<iframe src="https://player.vimeo.com/video/212311862" width="100%" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function elementCount(array) {
  var countObj = {};

  for (var i = 0; i < array.length; i++) {
    var key = array[i];

    if (countObj[key] === undefined) {
      countObj[key] = 1;
    } else {
      countObj[key]++;
    }
  }

  return countObj;
}
```
