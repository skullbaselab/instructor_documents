/*******************************************************************************
Write a function sillyCipher(sentence, cipher) that takes in an string (sentence)
and an object (cipher). Return a string where every character is replaced with its
cooresponding value in the cipher. If the character doesn't exist in the
cipher, use a dot (.)

Examples:

sillyCipher("apple" , { a : "c", p : "x", l : "r", e : "o"}) //=> 'cxxro'
sillyCipher("apple", { a : "c", p : "x"}) //=> 'cxx..'
sillyCipher("bootcamp prep?", { o : "e", p : "q" , "?" : "!"}) //=> '.ee....q.q..q!'
sillyCipher("twmce", { m : "n", t : "d", w : "a"}) //=> 'dan..''
*******************************************************************************/

function sillyCipher(sentence, cipher){
  var letters = sentence.split('')  // semicolons -AZ
  for (var i = 0; i < letters.length; i++) {
  var letter = letters[i] // missing indentation -AZ
    if (cipher[letter] !== undefined){
      letters[i] = cipher[letter]
    } // start your else here -AZ
    else {
      letters[i] = '.'
    }
  }
    return letters.join('') // extra indentation on this line -AZ
}

// Nice! However, be consistent with indentation
// The rule of thumb is to indent all lines in a block of code.
// That means all code inside of a for, if, etc.. should be indented additionally -AZ

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = sillyCipher;
