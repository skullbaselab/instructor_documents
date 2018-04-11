## power Walkthrough

<iframe src="https://player.vimeo.com/video/240933582" width="100%" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


## power Solution Code

```js
function power(base, exp) {
  if (exp === 0) {
    return 1;
  }

  var result = base * power(base, exp - 1);
  return result;
}
```
