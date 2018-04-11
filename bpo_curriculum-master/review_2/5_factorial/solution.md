## factorial Walkthrough

<iframe src="https://player.vimeo.com/video/209638682" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function factorial(n) {
  var product = 1;

  for (var i = 1; i <= n; i++) {
    product *= i;
  }

  return product;
}
```
