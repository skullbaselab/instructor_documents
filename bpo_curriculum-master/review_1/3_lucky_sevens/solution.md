## luckySevens Walkthrough

<iframe src="https://player.vimeo.com/video/210321187" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function luckySevens(max) {
  var nums = [];

  for (var i = 1; i <= max; i += 1) {
    if (i % 7 === 0) {
      nums.push(i);
    }
  }

  return nums;
}
```
