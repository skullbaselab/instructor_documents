// removeEveryNth Solution /////////////////////////////////////////////////////
function removeEveryNth(array, n) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    var ele = array[i];

    if (i % n !== 0) {
      newArray.push(ele)
    }
  }

  return newArray;
}
////////////////////////////////////////////////////////////////////////////////


// removeEveryNth Solution /////////////////////////////////////////////////////
function longestCharStreak(string) {
  var longestStreak = '';
  var currentStreak = '';

  for (var i = 0; i < string.length; i++) {
    var currentChar = string[i];
    var lastChar = string[i - 1];

    if (currentChar === lastChar || i === 0) {
      currentStreak += currentChar;
    } else {
      currentStreak = currentChar;
    }

    if (currentStreak.length >= longestStreak.length) {
      longestStreak = currentStreak;
    }
  }

  return longestStreak;
}
////////////////////////////////////////////////////////////////////////////////


// lucasSequenceSum Solution /////////////////////////////////////////////////////
function lucasSequence(n) {
  if (n === 0) {
    return [];
  }

  if (n === 1) {
    return [2];
  }

  var seq = [2, 1];

  while (seq.length < n) {
    var firstLast = seq[seq.length - 1];
    var secondLast = seq[seq.length - 2];
    var next = firstLast + secondLast;
    seq.push(next);
  }

  return seq;
}

function arraySum(arr) {
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    sum += num;
  }

  return sum
}

function lucasSequenceSum(n) {
  var seq = lucasSequence(n);
  return arraySum(seq);
}
////////////////////////////////////////////////////////////////////////////////
