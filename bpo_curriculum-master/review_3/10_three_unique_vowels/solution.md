## threeUniqueVowels Walkthrough

<iframe src="https://player.vimeo.com/video/214076329" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function threeUniqueVowels(string) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var count = 0;

  for (var i = 0; i < vowels.length; i += 1) {
    var vowel = vowels[i];
    if (string.indexOf(vowel) > -1) {
      count += 1;
    }
  }

  return (count >= 3);
}
```
