## vowelShift Walkthrough

<iframe src="https://player.vimeo.com/video/211376112" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
// version 1
function vowelShift(sentence) {
  var replace = {
    a: 'e',
    e: 'i',
    i: 'o',
    o: 'u',
    u: 'a'
  };

  var newSen = '';

  for (var i = 0; i < sentence.length; i += 1) {
    var char = sentence[i];

    if (replace[char] === undefined) {
      newSen += char;
    } else {
      newSen += replace[char];
    }
  }

  return newSen;
}

// version 2
function vowelShift(sentence){
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var newSen = '';

  for (var i = 0; i < sentence.length; i += 1) {
    var char = sentence[i];
    var vowelIndex = vowels.indexOf(char);

    if (vowelIndex > -1) {
      var nextVowelIndex = (vowelIndex + 1) % 5;
      newSen += vowels[nextVowelIndex];
    } else {
      newSen += char;
    }
  }

  return newSen;
}
```
