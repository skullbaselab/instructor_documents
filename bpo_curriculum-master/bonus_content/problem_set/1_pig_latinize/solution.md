## pigLatinize Walkthrough

<iframe src="https://player.vimeo.com/video/223192687" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function isVowel(char) {
  var vowels = 'aeiouAEIOU';
  return vowels.indexOf(char) > -1;
}

function pigLatinNonVowel(word) {
  for (var i = 0; i < word.length; i++) {
    var char = word[i];

    if (isVowel(char)) {
      var newWord = word.slice(i) + word.slice(0, i) + 'ay';
      return newWord;
    }
  }

  return word + 'ay';
}

function pigLatinize(word) {
  if (isVowel(word[0])) {
    return word + 'yay';
  } else {
    return pigLatinNonVowel(word);
  }
}

```
