## removeNthLetter Walkthrough

<iframe src="https://player.vimeo.com/video/211749368" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function removeNthLetter(word, n) {
  return word.slice(0, n) + word.slice(n + 1);
}
```
