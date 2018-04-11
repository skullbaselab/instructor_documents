## countAdjacentSum Walkthrough

<iframe src="https://player.vimeo.com/video/210484564" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function countAdjacentSums(arr, n) {
  var count = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] + arr[i + 1] === n) {
      count++;
    }
  }

  return count;
}
```
