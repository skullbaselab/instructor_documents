## sumOfNPrimes Walkthrough

<iframe src="https://player.vimeo.com/video/207179003" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (var i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function firstNPrimes(n) {
  var primes = [];
  var num = 2;

  while(primes.length < n) {
    if (isPrime(num)) {
      primes.push(num);
    }

    num += 1;
  }

  return primes;
}

function sumOfNPrimes(n) {
  var sum = 0;
  var primes = firstNPrimes(n);

  for (var i = 0;  i < primes.length; i += 1) {
    sum += primes[i];
  }

  return sum;
}
```
