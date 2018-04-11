## echo Walkthrough

<iframe src="https://player.vimeo.com/video/206313355" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function echo(str) {
  var firstEcho = str.toUpperCase();
  var lastEcho = str.toLowerCase();

  return firstEcho + " ... " + str + " ... " + lastEcho;
}
```
