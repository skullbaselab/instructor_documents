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
  for (var i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
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
[13, -22] //return value

> mySelect([5,12,-22,-3], function(ele, i, arr){
..  return i % 2 === 0;
..})
[5, -22] //return value
******************************************************************************/
function mySelect (arr, cb) {
  var selected = [];

  myForEach(arr, function(ele, i, arr){
    if(cb(ele, i, arr)){
      selected.push(ele);
    }
  });

  return selected;
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
  mySelect : mySelect,
  myForEach : myForEach,
  inPigLatin : inPigLatin
};