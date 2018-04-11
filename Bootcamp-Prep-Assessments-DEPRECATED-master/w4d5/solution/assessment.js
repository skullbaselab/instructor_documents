/******************************************************************************
Write the function countAdjacentSums(arr, n) which takes an array and number.
It should count the number of times that two adjacent numbers in an array add up
to n.

Use Array#forEach.

Examples:
countAdjacentSums([1, 5, 1], 6) => 2
countAdjacentSums([7, 2, 4, 6], 7) => 0
countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13) => 3
******************************************************************************/
function countAdjacentSums(arr, n) {
  var count = 0;

  arr.forEach(function(ele, i) {
    if (ele + arr[i + 1] === n) {
      count += 1;
    }
  });

  return count;
}

/******************************************************************************
Write a function longestLetterStreak(str, searchLetters) that takes in 2 arguments:
 - str: A string of uppercase characters.
 - searchLetters: An array of uppercase single-character strings (i.e ["A", "F", "K"])

The function should return the length of the longest streak of letters in the `str`
that are in the `searchLetters`.

Example
longestLetterStreak("ACCA", ["C"]) => 2
longestLetterStreak("YACCADCA", ["C", "A"]) => 4
longestLetterStreak("ZTKZQRKKZ", ["Z", "K", "Y"]) => 3
longestLetterStreak("YYYYY", ["Z", "K", "Y"]) => 5
******************************************************************************/
function longestLetterStreak(str, searchLetters) {
  var longestStreak = -1;
  var streak = 0;

  str.split("").forEach(function(char){
    if(searchLetters.indexOf(char) !== -1){
      streak += 1;
      if(streak > longestStreak){
        longestStreak = streak;
      }
    } else {
      streak = 0;
    }
  });

  return longestStreak;
}

/******************************************************************************
Write a function inPigLatin(sentence) that translates a sentence into its pig
latin equivalent. The rules for the translation are as follows:

1) For words that begin with consonants, all letters before the initial
vowel are placed at the end of the word sequence. Then, "ay" is added to the end.
  Examples:
  "pig" → "igpay"
  "banana" → "ananabay"
  "trash" → "ashtray

2) For words that begin with vowels, just add "yay" to the end
  Examples
  "eat" → "eatyay"
  "omelet" → "omeletyay"
  "are" → "areyay"

!!! Words that were originally caplitalized must remained caplitalized
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
function pigLatinfy(word) {
  var vowels = ["a", "e", "i", "o", "u"];
  if (vowels.indexOf(word[0]) !== -1) { // starts with vowel
    return word.slice() + "yay";
  }
  else { // starts with consonant
    for (var i = 1; i < word.length; i++) {
      if (vowels.indexOf(word[i]) !== -1) { // finds first vowel
        return word.slice(i) + word.slice(0, i) + "ay"
      } else if (i === word.length - 1) { // no vowels
        return word.slice() + "ay";
      }
    }
  }
}

function capitalize(originalWord, pigLatinWord) {
  if (originalWord[0] === originalWord[0].toUpperCase()) {
    return pigLatinWord.slice(0, 1).toUpperCase() + pigLatinWord.slice(1).toLowerCase();
  }

  return pigLatinWord;
}

function inPigLatin(sentence){
  var words = sentence.split(" ");
  var plWords = [];

  words.forEach(function(word) {
    var pgWord = pigLatinfy(word);
    pgWord = capitalize(word, pgWord);

    plWords.push(pgWord);
  })

  return plWords.join(" ");
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
  inPigLatin : inPigLatin,
  countAdjacentSums : countAdjacentSums,
  longestLetterStreak : longestLetterStreak
};
