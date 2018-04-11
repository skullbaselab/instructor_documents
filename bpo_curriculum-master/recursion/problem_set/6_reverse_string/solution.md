## reverseString Walkthrough

<iframe src="https://player.vimeo.com/video/242292677" width="100%" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


## reverseString Solution Code


```js
function reverseString(string) {
  if (string === '') {
    return '';
  }

  var firstChar = string[0];
  var rest = string.slice(1);
  var reversed = reverseString(rest) + firstChar;
  return reversed;
}
```
