## splitHalfArray Walkthrough

<iframe src="https://player.vimeo.com/video/211376135" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


## Solution Code

```js
function splitHalfArray(array) {
  var midIndex = Math.floor(array.length / 2);

  if (array.length % 2 === 0) {
    return [array.slice(0, midIndex), array.slice(midIndex)];
  } else {
    return [array.slice(0, midIndex), array.slice(midIndex + 1)];
  }
}
```
