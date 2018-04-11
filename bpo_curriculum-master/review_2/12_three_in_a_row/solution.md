## threeInARow Walkthrough

<iframe src="https://player.vimeo.com/video/221020709" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function threeInARow(arr) {
  for (var i = 0; i < arr.length - 2; i++) {
    if (arr[i] === arr[i + 1] && arr[i] === arr[i + 2]) {
      return true;
    }
  }

  return false;
}
```
