## greatestCommonFactor Walkthrough

<iframe src="https://player.vimeo.com/video/220369646" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function greatestCommonFactor(num1, num2) {
  for (var i = num1; i >= 1; i--) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }
}
```
