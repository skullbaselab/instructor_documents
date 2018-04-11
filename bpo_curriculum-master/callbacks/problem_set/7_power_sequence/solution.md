## powerSequence Walkthrough

<iframe src="https://player.vimeo.com/video/214076415" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function powerSequence(base, length) {
  var seq = [base];

  while (seq.length < length) {
    var last = seq[seq.length - 1];
    var next = base * last;
    seq.push(next);
  }

  return seq;
}
```
