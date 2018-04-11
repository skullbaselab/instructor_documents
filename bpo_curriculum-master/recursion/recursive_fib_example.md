## Recursive fib

```
Write a function fib(n) that takes in a number and returns the nth number of
the fibonacci sequence.
In the fibonacci sequence, the 1st number is 1 and the 2nd number is 1. To generate the
next number in the sequence, we take the sum of the previous two fibonacci numbers.
For example the first 5 numbers of the fibonacci sequence are `1, 1, 2, 3, 5`

Examples:

fib(1) // => 1
fib(2) // => 1
fib(3) // => 2
fib(4) // => 3
fib(5) // => 5
fib(6) // => 8
fib(7) // => 13
```

## fib Walkthrough

<iframe src="https://player.vimeo.com/video/240933506" width="100%" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## fib Solution

```js
function fib(n) {
  if (n === 1 || n === 2) {
    return 1;
  }

  var answer = fib(n - 1) + fib(n - 2);
  return answer;
}
```
