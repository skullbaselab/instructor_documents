/******************************************************************************
** Directions:
**  For each question, replace the blank
**  with a word from the word bank.
**

            -= WORD BANK =-
         | ================= |
         | * property        |
         | * method          |
         | * this            |
         | * scope           |
         | * array           |
         | * object          |
         | ================= |

===============================================
 Question #1:
 This composite data type stores elements in an ordered list
-----------------------------------------------
 Answer #1: array
===============================================

===============================================
 Question #2:
 This composite data type stores a data according to a 'key' value
-----------------------------------------------
 Answer #2: object
===============================================

===============================================
 Question #3:
 The area of a program where a variable name is considered valid.
-----------------------------------------------
 Answer #3: scope
===============================================

===============================================
 Question #4:
 String.prototype.length is known as [blank].
-----------------------------------------------
 Answer #4: property
===============================================

===============================================
 Question #5:
 An object may refer to its own properties and methods with this keyword.
-----------------------------------------------
 Answer #5: this
===============================================

===============================================
 Question #6:
 A function within an object is called a [blank] .
-----------------------------------------------
 Answer #6: method
===============================================
*/

/******************************************************************************
** Write a function #myIndexOf(array, ele) that takes an array and an element.
** Return the index of the element in the array, or -1 if it doesn't exist. Assume
** the `ele` will be a primitive data type (no arrays or objects). DO NOT USE
** Array.prototype.indexOf
** Example
** myIndexOf([1,2,3,4,5], 5) => 4
** myIndexOf(["a", "b", "c"], "a") => 0
** myIndexOf(["a", "b", "c"], "d") => -1
*/

function myIndexOf(array, ele) {
  // your code here...
  for (var i = 0; i < array.length; i++) {
    if (array[i] === ele) {
      return i;
    }
  }

  return -1;
}

/******************************************************************************
** Write a function `minMaxProduct(array)` that returns the difference between the
** largest value and the smallest value in the array. Assume `array` is an array of
** numbers. Assume an array of at least two numbers.
** Example
** minMaxProduct([1,2,3,4,5]) => 5
** minMaxProduct([5,4,3,2,1]) => 5
** minMaxProduct([4,2,5,1,-5]) => -25
*/
function minMaxProduct(array) {
  // your code here...
  var min = array[0];
  var max = array[0];

  for (var i = 0; i < array.length; i++) {
    var num = array[i];

    if (min > num) {
      min = num;
    } else if (max < num) {
      max = num;
    }
  }

  return max * min;
}

/******************************************************************************
** Write a function `leastCommonMultiple(num1, num2)` that returns the
** lowest number which is a multiple of both inputs.
** Example
** lcm(2, 3) => 6
** lcm(6, 10) => 30
** lcm(24, 26) => 312
*/

function leastCommonMultiple(num1, num2) {
  // your code here...
  var i = num1;

  while(true) {
    if (i % num2 === 0) {
      return i;
    }
    i += num1;
  }
}

/******************************************************************************
** Write a function `hipsterfy(sentence)` that takes takes a string containing
** several words as input. Remove the last vowel from each word. 'y' is not a vowel.
** Example
** hipsterfy("proper") => "propr"
** hipsterfy("proper tonic panther") => "propr tonc panthr"
** hipsterfy("towel flicker banana") => "towl flickr banan"
** hipsterfy("runner anaconda") => "runnr anacond"
** hipsterfy("turtle cheeseburger fries") => "turtl cheeseburgr fris"
*/

function hipsterfyWord(word){
  var vowels = ["a", "e", "i", "o", "u"];

  for (var i = word.length - 1; i >= 0; i -= 1) {
    if (vowels.indexOf(word[i]) !== -1) {
      var hipsterWord = word.slice(0, i) + word.slice(i + 1);
      return hipsterWord;
    }
  }

  return word;
}

function hipsterfy(sentence) {
  // your code here...
  var hipsterified = [];
  var splitSentence = sentence.split(" ");

  for (var i = 0; i < splitSentence.length; i += 1) {
    var word = splitSentence[i];
    hipsterified.push(hipsterfyWord(word));
  }

  return hipsterified.join(" ");
}


/******************************************************************************
** Write a function #magicCipher(sentence, cipher) that takes in an string(sentence)
** and an object(cipher). Return a string where every character is replaced with its
** cooresponding value in the cipher. If the character doesn't exist in the
** cipher, use the character.
** Example
** magicCipher("add me on facebook" , { a : "c", d : "q"}) => "cqq me on fccebook"
** magicCipher("where are you?" , { v : "l", '?' : "!"}) => "where are you!"
** magicCipher("twmce" , { m : "n", t : "d", w : "a"}) => "dance"
*/

function magicCipher(sentence, cipher) {
  // your code here...
  var decoded = "";

  for (var i = 0; i < sentence.length; i++) {
    var char = sentence[i];
    var decodedChar = cipher[char] || char;
    decoded += decodedChar;
  }

  return decoded;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
  leastCommonMultiple : leastCommonMultiple,
  myIndexOf : myIndexOf,
  magicCipher : magicCipher,
  minMaxProduct : minMaxProduct,
  hipsterfy : hipsterfy
};
