## alternateCase Walkthrough

<iframe src="https://player.vimeo.com/video/211749354" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function alternateCase(str) {
  var newStr = '';

  for (var i = 0; i < str.length; i += 1) {
    if (i % 2 === 0) {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i].toLowerCase();
    }
  }

  return newStr;
}
```
