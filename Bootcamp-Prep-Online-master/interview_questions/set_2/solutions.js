// evenEqualOdd Solution ///////////////////////////////////////////////////////
function evenEqualOdd(array) {
  var evenSum = 0;
  var oddSum = 0;
  for (var i = 0; i < array.length; i++) {
    var num = array[i];
    if (num % 2 === 0) {
      evenSum += num;
    } else {
      oddSum += num;
    }
  }

  return evenSum === oddSum;
}
////////////////////////////////////////////////////////////////////////////////

// bestScoresSum ///////////////////////////////////////////////////////////////
function arraySum(arr) {
  var total = 0;

  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total;
}

function bestScoresSum(arr) {
  var best = arr[0];

  for (var i = 0; i < arr.length; i++) {
    var person = arr[i];
    if (arraySum(person.scores) > arraySum(best.scores)) {
      best = person;
    }
  }

  var names = best.name.split(' ');
  return names[0][0] + names[1][0];
}
////////////////////////////////////////////////////////////////////////////////


// primeRangeSum ///////////////////////////////////////////////////////////////
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

function primeRangeSum(num1, num2) {
  if (num1 < num2) {
    var start = num1;
    var end = num2;
  } else {
    var start = num2;
    var end = num1
  }

  var sum = 0;

  for (var i = start; i <= end; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }

  return sum;
}
////////////////////////////////////////////////////////////////////////////////
