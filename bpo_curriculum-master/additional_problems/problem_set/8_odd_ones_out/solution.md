## oddOnesOut Walkthrough

<iframe src="https://player.vimeo.com/video/214723572" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function elementCount(array) {
  var countObj = {};

  for (var i = 0; i < array.length; i += 1) {
    var key = array[i];

    if (countObj[key] === undefined) {
      countObj[key] = 1;
    } else {
      countObj[key] += 1;
    }
  }

  return countObj;
}

function oddOnesOut(array) {
  var count = elementCount(array);
  var result = [];

  for (var ele in count) {
    if (count[ele] % 2 === 0) {
      result.push(ele);
    }
  }

  return result;
}
```
