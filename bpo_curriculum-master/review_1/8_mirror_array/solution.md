## mirrorArray Walkthrough

<iframe src="https://player.vimeo.com/video/213729885" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function mirrorArray(array) {
  var newArray = [];

  for(var i = 0; i < array.length; i += 1) {
    var el = array[i];
    newArray.push(el);
  }

  for (var i = array.length - 1; i >= 0; i -= 1) {
    var el = array[i];
    newArray.push(el);
  }

  return newArray;
}
```
