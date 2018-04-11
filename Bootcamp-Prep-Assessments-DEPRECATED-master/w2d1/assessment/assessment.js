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
 Answer #1: ____
===============================================

===============================================
 Question #2:
 A named procedure or series of programming statements that returns a value upon completion
-----------------------------------------------
 Answer #2: ____
===============================================

===============================================
 Question #3:
 A programming contruct that repeats a process over and over again?
-----------------------------------------------
 Answer #3: ____
===============================================

===============================================
 Question #4:
 The process of breaking a large problem into smaller, easier ones
-----------------------------------------------
 Answer #4: ____
===============================================

===============================================
 Question #5:
 The act of hiding details, often the implementation details
-----------------------------------------------
 Answer #5: ____
===============================================

===============================================
 Question #6:
 Statements that return true or false, often used in if-statements
-----------------------------------------------
 Answer #6: ____
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
  // your code here...
}

/******************************************************************************
** Write a function elementCount(array) that returns a object. Each key
** corresponds to an element in the array and the value corresponds to how many
** times that element appears in the array
** Example:
** elementCount(["a", "a", "b", "b"]) => { "a" : 2, "b" : 2 }
*/

function elementCount(array){
  // your code here...
}

/******************************************************************************
** Write a function reverseRange(start, end) that returns an array that contains all
** numbers between 'start' and 'end' (exclusive) in reverse-sequential order.
** Don't use Array#reverse.
** Examples:
** reverseRange(2,7) => [6, 5, 4, 3]
** reverseRange(4,2) => []
*/

function reverseRange(start, end){
  // your code here...
}

/******************************************************************************
** Write a function reverseSentence(sentence) that return a string where all the
** words in the input sentence are reversed. Don't use Array#reverse.
** Examples:
** reverseSentence("Go to the store") => "store the to Go"
** reverseSentence("Jump, jump for joy") => "joy for jump Jump,"
*/
function reverseSentence(sentence){
  // your code here...
}

/******************************************************************************
** Write a function magicNumbers(max) that returns an array of numbers up to
** the max. Each number should be either divisible by 4 or 6, BUT NOT BOTH.
** Example:
** magicNumbers(20) => [4, 6, 8, 16, 18]
*/
function magicNumbers(max){
  // your code here...
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
  reverseRange : reverseRange,
  royalWe : royalWe,
  elementCount : elementCount,
  reverseSentence : reverseSentence,
  magicNumbers : magicNumbers
};
