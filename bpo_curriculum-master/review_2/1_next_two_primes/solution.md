## nextTwoPrimes Walkthrough

<iframe src="https://player.vimeo.com/video/209436548" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (var i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function nextTwoPrimes(num) {
  var primes = [];

  for (var i = num + 1; primes.length < 2; i += 1) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
}
```
