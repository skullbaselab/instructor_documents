## signFlipCount Walkthrough

<iframe src="https://player.vimeo.com/video/210484521" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


## Solution Code

```js
// version 1
function oppositeSign(num1, num2) {
  if ((num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0)) {
    return true;
  } else {
    return false;
  }
}

function signFlipCount(numbers) {
  var count = 0;

  for (var i = 0; i < numbers.length - 1; i++) {
    if (oppositeSign(numbers[i], numbers[i + 1])) {
      count++;
    }
  }

  return count;
}

// version 2
function signFlipCount(numbers) {
  var count = 0;

  for (var i = 0; i < numbers.length - 1; i++) {
    if ((numbers[i] * numbers[i + 1]) < 0) {
      count++;
    }
  }

  return count;
}
```
