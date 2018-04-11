## mindPsAndQs Walkthrough

<iframe src="https://player.vimeo.com/video/210818751" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


## Solution Code

```js
function mindPsAndQs(str) {
  var longestStreak = 0;
  var currentStreak = 0;

  for (var i = 0; i < str.length; i += 1) {
    var char = str[i];
    if (char === 'P' || char === 'Q') {
      currentStreak += 1;
    } else if (longestStreak < currentStreak ) {
      longestStreak = currentStreak;
      currentStreak = 0;
    } else {
      currentStreak = 0;
    }
    if (i === str.length - 1 && longestStreak < currentStreak) {
      longestStreak = currentStreak;
    }
  }

  return longestStreak;
}
```
