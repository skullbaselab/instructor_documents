## commonPrimeFactors Walkthrough

<iframe src="https://player.vimeo.com/video/210814313" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


## Solution Code

```js
function commonFactors(num1, num2) {
  if (num1 < num2) {
    var min = num1;
  } else {
    var min = num2;
  }

  var factors = [];

  for (var i = 1; i <= min; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      factors.push(i);
    }
  }

  return factors;
}


function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function commonPrimeFactors(num1, num2) {
  var factors = commonFactors(num1, num2);
  var primeFactors = [];

  for (var i = 0; i < factors.length; i += 1) {
    var factor = factors[i];
    if (isPrime(factor)) {
      primeFactors.push(factor);
    }
  }

  return primeFactors;
}
```
