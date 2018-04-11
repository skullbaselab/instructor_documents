/*************************************************************
Write a function logEach(array) that prints every element
of the array and its index to the console.

Use Array#forEach.

Examples:
> logEach(["Anthony", "John", "Carson"]);
0: Anthony
1: John
2: Carson
*************************************************************/

function logEach(ary) {
  ary.forEach(function(ele, idx) {
    console.log(idx + ": " + ele);
  });
}

/*************************************************************
Write a function maxValue(ary) that returns the largest
value in the ary. ary is an array of numbers.

Use Array#forEach.

Examples:
> maxValue([12, 6, 43, 2])
43

> maxValue([])
null

> maxValue([-4, -10, 0.43])
0.43
*************************************************************/

function maxValue(ary) {
  var max = null;

  ary.forEach(function(num) {
    if (num > max) {
      max = num;
    }
  });

  return max;
}

/**********************************************************
Write a function longWordCount(string, n) that takes in a
string and returns the number of words longer than n
characters.

Use Array#forEach.

Examples:
> longWordCount("", 3);
0

> longWordCount("short words only", 6);
0

> longWordCount("one reallylong word", 9);
1

> longWordCount("two reallylong words inthisstring", 9);
2

> longWordCount("seventy schfifty five", 7);
1
**********************************************************/

function longWordCount(string, n) {
  var words = string.split(" ");
  var count = 0;

  words.forEach(function(word) {
    if (word.length > n) {
      count++;
    }
  });

  return count;
}

/***************************************************************************
Write a function arraySumN(ary, n) which takes as ary a 2-dimensional array
and as n a number. ary is an array of arrays of numbers. The function returns
the indices of the inner arrays whose elements sum to n.

Use Array#forEach.

Example 1:
var ary1 = [ [0, 1], [2, 2, 0], [3, -2] ];
var results1 = arraySumN(ary1, 1);
results1; // => [0, 2]

Example 2:
var ary2 = [ [3, 2, 1], [100], [0, 1, 2, 3, 100], [6] ];
arraySumN(ary2, 6); // => [0, 3]
***************************************************************************/

function arraySumN(ary, n) {
  var results = [];

  ary.forEach(function(innerAry, idx) {
    var sum = 0;

    innerAry.forEach(function(num) {
      sum += num;
    });

    if (sum === n) {
      results.push(idx);
    }
  });

  return results;
}
