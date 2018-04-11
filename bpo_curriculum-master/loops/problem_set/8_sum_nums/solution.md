## sumNums Walkthrough

<iframe src="https://player.vimeo.com/video/213574925" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function sumNums(max) {
  var sum = 0;

  for (var i = 1; i <= max; i += 1) {
    sum += i;
  }

  return sum;
}
```

```js
function sumNums(max) {
  var sum = 0;
  var i = 1;

  while (i <= max) {
    sum += i;
    i++;
  }

  return sum;
}
```

```js
// For our mathematically inclined: https://math.stackexchange.com/questions/2260/proof-for-formula-for-sum-of-sequence-123-ldotsn

function sumNums2(n) {
  if (n <= 0) {
    return 0;
  } else {
    return (n * (n + 1))/ 2;
  }
} 
```
