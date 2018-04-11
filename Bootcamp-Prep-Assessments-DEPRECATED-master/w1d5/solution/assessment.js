/******************************************************************************
** Directions:
**  For each question, replace the blank
**  with a word from the word bank.
**

          -= WORD BANK =-
         | ============== |
         | * indexOf      |
         | * split        |
         | * key          |
         | * modulo       |
         | * initialize   |
         | * join         |
         | ============== |

===============================================
 Question #1:
 To declare a variable and set its value.
-----------------------------------------------
 Answer #1: initialize
===============================================

===============================================
 Question #2:
 Which operator gives the remainder of division?
-----------------------------------------------
 Answer #2: modulo
===============================================

===============================================
 Question #3:
 Objects contain [blank]-value pairs? Fill in the [blank]
-----------------------------------------------
 Answer #3: key
===============================================

===============================================
 Question #4:
 A method that transforms an array into a string. Takes an optional string argument that will be placed in between each element
-----------------------------------------------
 Answer #4: join
===============================================

===============================================
 Question #5:
 A method that transforms a string into an array. Takes an optional string argument that's used as the dividing point
-----------------------------------------------
 Answer #5: split
===============================================

===============================================
 Question #6:
 A method that accepts a value and returns the index of that value in the string/array, or -1 if it's not there.
-----------------------------------------------
 Answer #6: indexOf
===============================================
*/

function range(start, end){
  // your code here...
  var array = [];
  for(var i = start; i <= end; i += 1){
    array.push(i);
  }
  return array;
}

function unique(array){
  // your code here...
  var uniqueA = [];

  for(var i = 0; i < array.length; i += 1){
    var ele = array[i];

    if(uniqueA.indexOf(ele) === -1){
      uniqueA.push(ele);
    }
  }

  return uniqueA;
}

function elementCount(array){
  // your code here...
  var count = {};

  for(var i = 0; i < array.length; i += 1){
    var ele = array[i];

    if(count[ele] === undefined){
      count[ele] = 1;
    } else {
      count[ele] += 1;
    }
  }

  return count;
}

function reverseSentence(sentence){
  // your code here...
  var sentenceArray = sentence.split(" ");
  var reversed = [];

  while(sentenceArray.length > 0){
    reversed.push(sentenceArray.pop());
  }

  return reversed.join(" ");
}

function fizzBuzz(max){
  // your code here...
  var result = [];

  for(var i = 1; i < max; i += 1){
    if((i % 3 === 0 && i % 5 !== 0) || (i % 5 === 0 && i % 3 !== 0)){
      result.push(i);
    }
  }

  return result;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
  range : range,
  unique : unique,
  elementCount : elementCount,
  reverseSentence : reverseSentence,
  fizzBuzz : fizzBuzz
};
