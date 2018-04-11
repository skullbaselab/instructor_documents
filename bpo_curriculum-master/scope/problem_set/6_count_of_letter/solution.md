## countOfLetter Walkthrough

<iframe src="https://player.vimeo.com/video/214076461" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function countOfLetter(string, char) {
  var count = 0;

  for (var i = 0; i < string.length; i += 1) {
    if (string[i].toLowerCase() === char.toLowerCase()) {
      count += 1;
    }
  }

  return count;
}
```
