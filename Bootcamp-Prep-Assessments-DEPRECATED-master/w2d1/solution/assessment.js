/******************************************************************************
** Directions:
**  For each question, replace the blank
**  with a word from the word bank.
**

           -= WORD BANK =-
         | =============== |
         | * abstraction   |
         | * loops         |
         | * decomposition |
         | * elements      |
         | * functions     |
         | * conditionals  |
         | =============== |

===============================================
 Question #1:
 Arrays are composed of [blank]. Fill in the [blank].
-----------------------------------------------
 Answer #1: elements
===============================================

===============================================
 Question #2:
 A named procedure or series of programming statements that returns a value upon completion
-----------------------------------------------
 Answer #2: functions
===============================================

===============================================
 Question #3:
 A programming contruct that repeats a process over and over again?
-----------------------------------------------
 Answer #3: loops
===============================================

===============================================
 Question #4:
 The process of breaking a large problem into smaller, easier ones
-----------------------------------------------
 Answer #4: decomposition
===============================================

===============================================
 Question #5:
 The act of hiding details, often the implementation details
-----------------------------------------------
 Answer #5: abstraction
===============================================

===============================================
 Question #6:
 Statements that return true or false, often used in if-statements
-----------------------------------------------
 Answer #6: conditionals
 ===============================================
*/

/******************************************************************************
** Write a function royalWe(sentence) that returns an string where every word
**'I' is replaced with 'we', every word 'mine' is replaced with 'ours', every
** word 'my' is replaced with 'our', and every word 'me' is replaced with "us"
** Examples:
** royalWe("I want to go to the store") => "we want to go to the store"
** royalWe("This is my house and you will respect me") => "This is our house and you will respect us"
** royalWe("This is mine") => "This is ours"
** royalWe("Jump for my love") => "Jump for our love"
*/

function royalWe(sentence){
  var replaceI = sentence.split("I").join("we");
  var replaceMine = replaceI.split("mine").join("ours");
  var replaceMy = replaceMine.split("my").join("our");
  var replaceMe = replaceMy.split("me").join("us");

  return replaceMe;
}

/******************************************************************************
** Write a function elementCount(array) that returns a object. Each key
** corresponds to an element in the array and the value corresponds to how many
** times that element appears in the array
** Example:
** elementCount(["a", "a", "b", "b"]) => { "a" : 2, "b" : 2 }
*/

function elementCount(array){
  var countObj = {};

  for (var i = 0; i < array.length; i++) {
    var key = array[i];

    if (countObj[key] === undefined) {
      countObj[key] = 1;
    } else {
      countObj[key]++;
    }
  }

  return countObj;
}

/******************************************************************************
** Write a function reverseRange(start, end) that returns an array that contains all
** numbers between 'start' and 'end' (exclusive) in reverse-sequential order.
** Don't use Array#reverse.
** Examples:
** range(2,7) => [6, 5, 4, 3]
** range(4,2) => []
*/

function reverseRange(start, end){
  var reverseArr = [];

  for (var i = end - 1; i > start; i--) {
    reverseArr.push(i);
  }

  return reverseArr;
}

/******************************************************************************
** Write a function reverseSentence(sentence) that returns a string where all the
** words in the input sentence are reversed. Don't use Array#reverse.
** Examples:
** reverseSentence("Go to the store") => "store the to Go"
** reverseSentence("Jump, jump for joy") => "joy for jump Jump,"
*/
function reverseSentence(sentence){
  var words = sentence.split(" ");
  var reverseWords = [];

  for (var i = words.length - 1; i >= 0; i--) {
    var word = words[i];
    reverseWords.push(word);
  }

  return reverseWords.join(" ");
}

/******************************************************************************
** Write a function magicNumbers(max) that returns an array of numbers up to
** the max. Each number should be either divisible by 4 or 6, BUT NOT BOTH.
** Example:
** magicNumbers(20) => [4, 6, 8, 16, 18]
*/
function magicNumbers(max){
  var magicNums = [];

  var i = 1;
  while (i < max) {
    if ((i % 4 === 0 || i % 6 === 0) && i % 12 !== 0) {
      magicNums.push(i);
    }
    i++;
  }

  return magicNums;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
  reverseRange : reverseRange,
  royalWe : royalWe,
  elementCount : elementCount,
  reverseSentence : reverseSentence,
  magicNumbers : magicNumbers
};
