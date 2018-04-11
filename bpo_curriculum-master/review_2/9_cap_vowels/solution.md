## capVowels Walkthrough

<iframe src="https://player.vimeo.com/video/213908348" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function capVowels(string) {
  var vowels = 'aeiouAEIOU'.split('');
  var newStr= '';

  for (var i = 0; i < string.length; i += 1) {
    var char = string[i];

    if (vowels.indexOf(char) > -1) {
      newStr += char.toUpperCase();
    } else {
      newStr += char.toLowerCase();
    }
  }

  return newStr;
}
```
