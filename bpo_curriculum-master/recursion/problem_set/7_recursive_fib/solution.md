## fib Walkthrough

<iframe src="https://player.vimeo.com/video/240933506" width="100%" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## fib Solution Code

```js
function fib(n) {
  if (n === 1 || n === 2) {
    return 1;
  }

  var answer = fib(n - 1) + fib(n - 2);
  return answer;
}
```
