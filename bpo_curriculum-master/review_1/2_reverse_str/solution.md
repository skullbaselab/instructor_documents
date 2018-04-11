## reverseStr Walkthrough

<iframe src="https://player.vimeo.com/video/208552851" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function reverseStr(str) {
  var reversed = '';

  for (var i = str.length - 1; i >= 0; i--) {
    var char = str[i];
    reversed += char;
  }

  return reversed;
}
```
