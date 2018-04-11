## additionSequence Walkthrough

<iframe src="https://player.vimeo.com/video/221328306" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function additionSequence(array, sequence) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    var num = array[i];
    var offset = sequence[i % sequence.length];
    newArray.push(num + offset);
  }

  return newArray;
}
```
