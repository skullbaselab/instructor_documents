## leastCommonMultiple Walkthrough

<iframe src="https://player.vimeo.com/video/209638756" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function lcm(num1, num2) {
  var i = num1;

  while (true) {
    if (i % num2 === 0 ) {
      return i;
    }
    i += num1;
  }
}

function lcm(num1, num2) {
  for (var i = 1; true; i++) {
    if (i % num1 === 0 && i % num2 === 0) {
      return i;
    }
  }
}
```
