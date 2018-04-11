// inAllStrings Solution ///////////////////////////////////////////////////////
function inAllStrings(longStrings, shortString) {
  for (var i = 0; i < longStrings.length; i++) {
    var longStr = longStrings[i];
    if (longStr.indexOf(shortString) === -1) {
      return false;
    }
  }

  return true;
}
////////////////////////////////////////////////////////////////////////////////

// repeatedChars Solution //////////////////////////////////////////////////////
function repeatedChars(word) {
  var repeats = [];

  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i + 1] && word[i] !== word[i - 1]) {
      repeats.push(word[i]);
    }
  }

  return repeats;
}
////////////////////////////////////////////////////////////////////////////////

// vigenereCipher Solution /////////////////////////////////////////////////////
function vigenereCipher(string, keySequence, alphabet) {
  var ciphered = '';

  for (var i = 0; i < string.length; i++) {
    var char = string[i];
    var offSet = keySequence[i % keySequence.length];
    var oldIndex = alphabet.indexOf(char);
    var newIndex = oldIndex + offSet;
    ciphered += alphabet[newIndex % alphabet.length];
  }

  return ciphered;
}
////////////////////////////////////////////////////////////////////////////////
