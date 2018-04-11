## isSorted Walkthrough

<iframe src="https://player.vimeo.com/video/228412110" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function isSorted(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] > array[i+1]) {
      return false;
    }
  }

  return true;
}
```
