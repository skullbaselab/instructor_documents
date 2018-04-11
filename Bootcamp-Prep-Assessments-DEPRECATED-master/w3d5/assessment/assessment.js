/******************************************************************************
** Directions:
**  For each question, replace the blank
**  with a word from the word bank.
**

           -= WORD BANK =-
         | =============== |
         | * synchronous   |
         | * callback      |
         | * bind          |
         | * higher-order  |
         | * closure       |
         | * asynchronous  |
         | =============== |

===============================================
 Question #1:
 When the code is executed in order, one statement after the other.
-----------------------------------------------
 Answer #1: ____
===============================================

===============================================
 Question #2:
 When code is not necessarily executed in the order that it's written.
-----------------------------------------------
 Answer #2: ____
===============================================

===============================================
 Question #3:
 A function which takes another function as an argument and/or return a function as it's return value.
-----------------------------------------------
 Answer #3: ____
===============================================

===============================================
 Question #4:
 When function refers to a variable that existed in the scope where it was created, we call this [blank].
-----------------------------------------------
 Answer #4: ____
===============================================

===============================================
 Question #5:
 A function that is passed as an argument to another function and run inside of that function is referred to as a [blank] .
-----------------------------------------------
 Answer #5: ____
===============================================

===============================================
 Question #6:
 A built-in method for functions that allow you to force what 'this' refers to.
-----------------------------------------------
 Answer #6: ____
===============================================
*/

/******************************************************************************
Write a function myForEach(arr, cb) that accepts an array and a callback. This
should behave just like Array#forEach. Passing the callback every element, its
corresponding index, and the array itself. It should return undefined. DO NOT USE
THE BUILT IN ARRAY#FOREACH METHOD
Example
> myForEach([5,12,-3], function(ele, i, arr){
..  console.log(ele + " is at position " + i + " in array " + arr);
..})
5 is at position 0 in array [5,12,-3]
12 is at position 1 in array [5,12,-3]
-3 is at position 2 in array [5,12,-3]
undefined //return value
******************************************************************************/
function myForEach (arr, cb) {
  // your code here...
}

/******************************************************************************
Write a function mySelect(arr, cb) that accepts an array and a callback. This
It should pass the callback every element, its corresponding index, and the array
itself. Returns an array containing all elements of arr for which the given callback
returns a truthy value. Feel free to use your myForEach function you wrote earlier.
Example
> mySelect([5,12,-22,-3], function(ele, i, arr){
..  return ele % 2 === 0;
..})
[12, -22] //return value

> mySelect([5,12,-22,-3], function(ele, i, arr){
..  return i % 2 === 0;
..})
[5, -22] //return value
******************************************************************************/
function mySelect (arr, cb) {
  // your code here...
}

/******************************************************************************
Write a function inPigLatin(sentence) that translates a sentence into its pig
latin equivalent. The rules for the translation are as follows:

1) For words that begin with consonant sounds, all letters before the initial
vowel are placed at the end of the word sequence. Then, "ay" is added to the end.
  Examples
  "pig" → "igpay"
  "banana" → "ananabay"
  "trash" → "ashtray

2) For words that begin with vowel sounds, just adds "yay" to the end
  Examples
  "eat" → "eatyay"
  "omelet" → "omeletyay"
  "are" → "areyay"

!!! Words that were originally caplitailzed must remained caplitailzed
!!! Assume no punctuation
!!! 'y' is not a vowel

Examples:
> inPigLatin("Shmanthony is the best teacher")
Anthonyshmay isyay ethay estbay eachertay

> inPigLatin("let us Dance")
etlay usyay Anceday

> inPigLatin("this is the time of my life")
isthay isyay ethay imetay ofyay myay ifelay
*******************************************************************************/

function inPigLatin(sentence){
  // your code here...
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
  mySelect : mySelect,
  myForEach : myForEach,
  inPigLatin : inPigLatin
};
