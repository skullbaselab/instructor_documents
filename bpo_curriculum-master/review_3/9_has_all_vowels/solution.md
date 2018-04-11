## hasAllVowels Walkthrough

<iframe src="https://player.vimeo.com/video/214076357" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function hasAllVowels(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  for (var i = 0; i < vowels.length; i += 1) {
    if (str.indexOf(vowels[i]) === -1) {
      return false;
    }
  }

  return true;
}
```
