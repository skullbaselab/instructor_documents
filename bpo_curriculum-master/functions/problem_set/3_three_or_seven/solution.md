## threeOrSeven Walkthrough

<iframe src="https://player.vimeo.com/video/206313632" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function threeOrSeven(number) {
  return (number % 7 === 0) || (number % 3 === 0);
}

function threeOrSeven(number) {
  if ((number % 7 === 0) || (number % 3 === 0)) {
    return true;
  } else {
    return false;
  }
}
```
