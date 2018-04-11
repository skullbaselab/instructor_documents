## opposingSums Walkthrough

<iframe src="https://player.vimeo.com/video/214901239" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function opposingSums(array) {
  var half = array.length / 2;
  var arr = [];

  for (var i = 0; i < half; i += 1) {
    var num1 = array[i];
    var num2 = array[array.length - 1 - i];
    var sum = num1 + num2;

    arr.push(sum);
  }

  return arr;
}

```
