/*******************************************************************************
Write a function magicCipher(sentence, cipher) that takes in an string(sentence)
and an object(cipher). Return a string where every character is replaced with its
cooresponding value in the cipher. If the character doesn't exist in the
cipher, use the character.

Examples:

magicCipher("add me on facebook" , { a : "c", d : "q"}) => "cqq me on fccebook"
magicCipher("where are you?" , { v : "l", '?' : "!"}) => "where are you!"
magicCipher("twmce" , { m : "n", t : "d", w : "a"}) => "dance"
*******************************************************************************/

function isObj(obj, key){
  return obj[key] !== undefined;
}


function switchLetter(cipher, letter){
  var newLetter = cipher[letter];
  return newLetter;
}


function magicCipher(sentence, cipher){
  var letters = sentence.split('');
  var newLetters = '';
  var newWord = sentence;

  for(i = 0; i < letters.length; i += 1){
    var letter = letters[i];

     if(isObj(cipher, letter)){

        newLetters = switchLetter(cipher, letter);
        newWord = newWord.replace(letter, newLetters);
     }
  }
  return newWord;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = magicCipher;
