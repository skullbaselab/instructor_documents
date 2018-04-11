## toFeet Walkthrough

<iframe src="https://player.vimeo.com/video/214575589" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function toFeet(distances) {
  var distancesInFeet = [];

  for (var i = 0; i < distances.length; i += 1) {
    var dis = distances[i];
    var parts = dis.split(' ');
    var num = parts[0];
    var unit = parts[1];

    if (parts[1] === 'yards') {
      var newDis = (num * 3) + ' feet';
      distancesInFeet.push(newDis);
    } else {
      distancesInFeet.push(dis);
    }
  }

  return distancesInFeet;
}

```
