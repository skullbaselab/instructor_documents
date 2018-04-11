## nickname Walkthrough

<iframe src="https://player.vimeo.com/video/214723691" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function nickname(name) {
  var vowels = 'AEIOUaeiou'.split('');
  var vowelCount = 0;

  for (var i = 0; i < name.length; i += 1) {
    var char = name[i];

    if (vowels.indexOf(char) > -1) {
      vowelCount += 1;
      if (vowelCount === 2) {
        break;
      }
    }
  }

  var str = name.slice(0, i + 1).toUpperCase();
  return str.toUpperCase() + '-' + str.toUpperCase();
}
```
