/******************************************************************************
Write a function censor(sentence, curseWords) that censors the given sentence by
replacing the vowels in curse words with "*". Assume no punctuation.

Use Array.prototype.forEach.

Examples:
censor("Darn you Harold you son of a gun", ["darn", "gun"]); //=> "D*rn you Harold you son of a g*n"
censor("Schnikeys I dont give a diddly squat", ["schnikeys", "diddly", "squat"]) //=> "Schn*k*ys I dont give a d*ddly sq**t"
******************************************************************************/

function censor(sentence, curseWords) {
  var censoredWords = [];

  var words = sentence.split(" ");
  var vowels = ["a", "e", "i", "o", "u"];

  words.forEach(function(word) {
    if (curseWords.indexOf(word.toLowerCase()) !== -1) { // word is a curse word
      vowels.forEach(function(vowel) { // replace each vowel with "*"
        word = word.split(vowel).join("*");
      });
    }

    censoredWords.push(word);
  });

  return censoredWords.join(" ");
}

/******************************************************************************
Write a function greatestMapCreator(ary, cb1, cb2) which takes as an
argument an array of numbers and two callbacks. It creates a new array
with each element from ary "mapped" to a new element using whichever
callback returns a larger mapped value. Both callbacks take as
arguments the element, index and array.

Use Array.prototype.forEach.

Example 1:
var ary1 = [1, 5, 10];
var squareRootRounder = function(num) {
  return Math.round(Math.sqrt(num));
};
var half = function(num) {
  return num / 2;
};
greatestMapCreator(ary1, squareRootRounder, half); //=> [ 1, 2.5, 5 ]

Hint 1:
squareRootRounder(1); //=> 1
squareRootRounder(5); //=> 2
squareRootRounder(10); //=> 3

half(1); //=> 0.5
half(5); //=> 2.5
half(10); //=> 5

Example 2:
var ary2 = [10, 20, -100];
var absoluteValue = function(num) {
  return Math.abs(num);
};
var power = function(a, b) {
  return Math.pow(a, b);
}
greatestMapCreator(ary2, absoluteValue, power); //=> [ 10, 20, 10000 ]

Hint 2:
absoluteValue(10); //=> 10
absoluteValue(20); //=> 20
absoluteValue(-100); //=> 100

power(10, 0); //=> 1
power(20, 1); //=> 20
power(-100, 2); //=> 10000
******************************************************************************/

function greatestMapCreator(ary, cb1, cb2) {
  var mappedAry = [];

  ary.forEach(function(num, idx, arry) {
    var mappedEle1 = cb1(num, idx, arry);
    var mappedEle2 = cb2(num, idx, arry);

    mappedAry.push(mappedEle1 > mappedEle2 ? mappedEle1 : mappedEle2);
  });

  return mappedAry;
}

/******************************************************************************
Isogram Matcher

An isogram is a word with only unique, non-repeating letters.
Given two isograms of the same length, return an array with two numbers
indicating matches: the first number is the number of letters matched in both
words at the same position, and the second is the number of letters matched in
both words but not in the same position.

Examples:
isogramMatcher("an", "at"); //=> [1, 0]
isogramMatcher("or", "go"); //=> [0, 1]
isogramMatcher("cat", "tap"); //=> [1, 1]
isogramMatcher("home", "dome"); //=> [3, 0]
isogramMatcher("ultrasonic", "ostracized"); //=> [3, 4]
isogramMatcher("unpredictably", "hydromagnetic"); //=> [1, 8]
******************************************************************************/

function isogramMatcher(string1, string2) { // solution 1
  var lettersSamePos = 0;
  var lettersDiffPos = 0;

  for (var i = 0; i < string1.length; i++) {
    if (string1[i] === string2[i]) {
      lettersSamePos++;
    } else if (string2.indexOf(string1[i]) !== -1) {
      lettersDiffPos++;
    }
  }

  return [lettersSamePos, lettersDiffPos];
}

function isogramMatcher(word1, word2) { // solution 2
  return [lettersSamePos(word1, word2), lettersDiffPos(word1, word2)];
}

function lettersSamePos(w1, w2) {
  var count = 0;

  for (var i = 0; i < w1.length; i++) {
    if (w1[i] === w2[i]) {
      count++;
    }
  }

  return count;
}

function lettersDiffPos(w1, w2) {
  var count = 0;

  for (var i = 0; i < w1.length; i++) {
    var indexOf = w2.indexOf(w1[i]);
    if (indexOf !== -1 && indexOf !== i) {
      count++;
    }
  }

  return count;
}
