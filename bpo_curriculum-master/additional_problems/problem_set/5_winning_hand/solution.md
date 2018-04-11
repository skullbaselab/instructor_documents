## winningHand Walkthrough

<iframe src="https://player.vimeo.com/video/214723755" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function handScore(string) {
  var value = {
    'J': 1,
    'Q': 2,
    'K': 3
  }

  var score = 0;

  for (var i = 0; i < string.length; i += 1) {
    var card = string[i];
    score += value[card];
  }

  return score;
}


function winningHand(hand1, hand2) {
  var score1 = handScore(hand1);
  var score2 = handScore(hand2);

  if (score1 > score2) {
    return hand1;
  } else if (score2 > score1) {
    return hand2;
  } else {
    return 'DRAW';
  }
}
```
