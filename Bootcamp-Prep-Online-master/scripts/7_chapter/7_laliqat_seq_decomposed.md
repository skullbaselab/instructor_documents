My approach to decomposition is to start from the outermost method and move towards the innermost method. I'll go ahead and start writing my solution, and when I come to a point where there is some large complex process that would clutter up my current function, I act as if I already have a function that executes that complex process. For example:

```js
function laligatSequence(base, n){
  var seq = [base];

  while (seq.length < n) {
    var prevElement = seq[seq.length - 1];
    var nextElement = sumOfPrimesUpToN(prevElement);
    seq.push(nextElement);
  }

  return seq;
}
```

This code returns the first `n` numbers of the laligat sequence starting at `base`, assuming that `sumOfPrimesUpToN` returns the laligat sum of the previous element. At this point, I'd write my `sumOfPrimesUpToN` function.

```js
function sumOfPrimesUpToN(n){
  var sum = 0;

  for (var i = 2; i <= n; i += 1) {
    if (isPrime(i)) {
      sum += i;
    }
  }

  return sum;
}

function laligatSequence(base, n) {
  var seq = [base];

  while (seq.length < n) {
    var prevElement = seq[seq.length - 1];
    var nextElement = sumOfPrimesUpToN(prevElement);
    seq.push(nextElement);
  }

  return seq;
}
```

Now `sumOfPrimesUpToN` depends on the function `isPrime`. Let's add that:

```js
function isPrime(n) {
  for (var i = 2; i  < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function sumOfPrimesUpToN(n) {
  var sum = 0;

  for (var i = 2; i <= n; i += 1) {
    if (isPrime(i)) {
      sum += i;
    }
  }

  return sum;
}

function laligatSequence(base, n) {
  var seq = [base];

  while (seq.length < n) {
    var prevElement = seq[seq.length - 1];
    var nextElement = sumOfPrimesUpToN(prevElement);
    seq.push(nextElement);
  }

  return seq;
}
```

Go back and compare this to the non-decomposed version. This one is MUCH easier to reason about. If I have a bug, it's also easier to target where the bug came from. If, for instance, we get sequences that are the wrong length, I know to look in the `laligatSequence` function body because that determines the sequence length. If I'm getting numbers that are incorrect, I know to look in the `sumOfPrimesUpToN` function. And finally, decomposition gives you a confidence in the correctness of your code.
