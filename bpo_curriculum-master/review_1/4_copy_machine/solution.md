## copyMachine Walkthrough

<iframe src="https://player.vimeo.com/video/210321263" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function copyMachine(element, num) {
  var arr = [];

  for (var i = 0; i < num; i += 1) {
    arr.push(element);
  }

  return arr;
}
```
