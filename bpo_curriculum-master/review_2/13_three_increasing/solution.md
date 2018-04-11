## threeIncreasing Walkthrough

<iframe src="https://player.vimeo.com/video/221328711" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function threeIncreasing(arr) {
  for (var i = 0; i < arr.length - 2; i++) {
    var num1 = arr[i];
    var num2 = arr[i + 1];
    var num3 = arr[i + 2];
    if ((num1 + 1 === num2) && (num2 + 1 === num3)) {
      return true;
    }
  }

  return false;
}
```
