## Recursive power

```
Write a function `power(base, exp)` that takes in two numbers.
The function should return `base` raised to the `exponent` power.
For example `power(2, 5)` is 2 * 2 * 2 * 2 * 2 = 32.
```

## Recursive power Whiteboard

<iframe src="https://player.vimeo.com/video/240933609" width="100%" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Recursive power Walkthrough

<iframe src="https://player.vimeo.com/video/240933582" width="100%" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


## Recursive power Solution

```js
function power(base, exp) {
  if (exp === 0) {  // base case
    return 1;
  }

  return base * power(base, exp - 1);
}
```
