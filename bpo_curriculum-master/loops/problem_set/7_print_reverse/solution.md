## printReverse Walkthrough

<iframe src="https://player.vimeo.com/video/213574937" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function printReverse(min, max) {
  for (var i = max - 1; i > min; i -= 1) {
    console.log(i);
  }
}
```

```js
function printReverse(min, max) {
  var i = max - 1;
  while (i > min) {
    console.log(i);
    i--;
  }
}
```
