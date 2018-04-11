## countScores Walkthrough

<iframe src="https://player.vimeo.com/video/207348542" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function countScores(people) {
  var scoresObj = {};

  for (var i = 0; i < people.length; i++) {
    var personObj = people[i];
    var name = personObj.name;
    var score = personObj.score;

    if (scoresObj[name]) {
      scoresObj[name] += score;
    } else {
      scoresObj[name] = score;
    }
  }
  return scoresObj;
}
```
