Let's first look at the non-decomposed version:

```js
function laligatSequence(base, n) {
  var sequence = [base];

  while (sequence.length < n) {
      var prevElement = sequence[sequence.length - 1];

      var laligatSum = 0;

      for (var maybePrime = 2; maybePrime <= prevElement; maybePrime += 1) {
        var prime = true;

        for (var i = 2; i < maybePrime; i += 1) {
          if (maybePrime % i === 0) {
            prime = false;
          }
        }

        if (prime) {
          laligatSum += maybePrime;
        }
      }

      sequence.push(laligatSum);
  }

  return sequence;
}
```

As you can see, this function is very hard to read and reason about. What if this code contained a bug? How noticeable would it be? If there was an issue with how prime numbers are found, would you know where to look?
