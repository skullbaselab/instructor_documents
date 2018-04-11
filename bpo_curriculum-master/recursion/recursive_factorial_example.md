## Recursive factorial

Let's explore recursion by stepping through a few problems together! First up is `factorial`.

```
Write a function `factorial(n)` which takes a number and returns the factorial of n.
A factorial is the product of all whole numbers between 1 and n, inclusive.
For example, `factorial(5)` is 5 * 4 * 3 * 2 * 1 = 120.
```

## Recursive factorial Whiteboard

<iframe src="https://player.vimeo.com/video/240224863" width="100%" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Recursive factorial Walkthrough

<iframe src="https://player.vimeo.com/video/240224769" width="100%" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Recursive factorial Solution

```js
function factorial(n) {
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}
```
