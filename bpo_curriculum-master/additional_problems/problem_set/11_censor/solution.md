## censor Walkthrough

<iframe src="https://player.vimeo.com/video/214900865" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function censorWord(word) {
  var vowels = ["a", "e", "i", "o", "u"];

  for (var i = 0; i < vowels.length; i += 1) {
    var vowel = vowels[i];
    word = word.split(vowel).join('*');
  }

  return word;
}

function censor(sentence, curseWords) {
  var words = sentence.split(' ');
  var newWords = [];

  for (var i = 0; i < words.length; i += 1) {
    var word = words[i];

    if (curseWords.indexOf(word.toLowerCase()) === -1) {
      newWords.push(word);
    } else {
      newWords.push(censorWord(word));
    }
  }

  return newWords.join(' ');
}
```
