## fibonacci Walkthrough

<iframe src="https://player.vimeo.com/video/211544248" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function fibonacci(n) {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [1];
  }

  var seq = [1, 1];

  for (var i = 2; i < n; i += 1) {
    var last = seq[seq.length - 1];
    var secondLast = seq[seq.length - 2];
    var next = last + secondLast;

    seq.push(next);
  }

  return seq;
}
```
