## commonFactors Walkthrough

<iframe src="https://player.vimeo.com/video/210814346" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


## Solution Code

```js
function commonFactors(num1, num2) {
  if (num1 < num2) {
    var max = num1;
  } else {
    var max = num2
  }

  var factors = [];

  for (var i = 1; i <= max; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      factors.push(i);
    }
  }

  return factors;
}
```
