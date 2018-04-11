## Original Code

```js
function unique(array) {
  var uniqueArray = [];

  for (var i = 0, i <= array.length, i += 1) {
    var ele = array[i];

    if (uniqueArray.indexOf(ele) === -1) {
      uniqueArray.push(ele);
    }
  }
}

unique([1,23,2,4,5,1,23]) //=> [1, 23, 2, 4, 5];
```

## Debugged Code

```js
function unique(array) {
  var uniqueArray = [];

  for (var i = 0; i < array.length; i += 1) {
    var ele = array[i];

    if (uniqueArray.indexOf(ele) === -1) {
      uniqueArray.push(ele);
    }
  }

  return uniqueArray;
}

unique([1,23,2,4,5,1,23]) //=> [1, 23, 2, 4, 5];
```
