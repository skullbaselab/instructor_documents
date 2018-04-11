## collapseString Walkthrough

<iframe src="https://player.vimeo.com/video/210484497" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


## Solution Code

```js
function collapseString(str) {
  var collapsed = '';

  for (var i = 0; i < str.length; i++) {
    var char = str[i];

    if (char !== collapsed[collapsed.length - 1]) {
      collapsed += char;
    }
  }

  return collapsed;
}
```
