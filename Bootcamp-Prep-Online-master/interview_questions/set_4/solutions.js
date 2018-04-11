// isPerfectNum Solution ///////////////////////////////////////////////////////
function isPerfectNum(n) {
  var sum = 0;
  for (var i = 1; i < n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }

  return sum === n;
}
////////////////////////////////////////////////////////////////////////////////


// factorialArray //////////////////////////////////////////////////////////////
function factorial(n) {
  var product = 1;

  for (var i = 1; i <= n; i++) {
    product *= i;
  }

  return product;
}

function factorialArray(arr) {
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    var newNum = factorial(num);
    newArr.push(newNum);
  }

  return newArr;
}
////////////////////////////////////////////////////////////////////////////////


// uniqueChars Solution ////////////////////////////////////////////////////////
function hasUniqueChars(word) {
  var seenChars = [];

  for (var i = 0; i < word.length; i++) {
    var char = word[i];
    if (seenChars.indexOf(char) === -1) {
      seenChars.push(char);
    } else {
      return false;
    }
  }

  return true;
}

function uniqueCharsInWords(sentence) {
  var words = sentence.split(' ');

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    if (!hasUniqueChars(word)) {
      return false;
    }
  }

  return true;
}
////////////////////////////////////////////////////////////////////////////////
