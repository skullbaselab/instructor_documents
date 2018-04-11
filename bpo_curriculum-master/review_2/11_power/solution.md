## power Walkthrough

<iframe src="https://player.vimeo.com/video/213908270" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function power(base, exp) {
  var product = 1;

  for (var i = 0; i < exp; i += 1) {
    product *= base;
  }

  return product;
}
```
