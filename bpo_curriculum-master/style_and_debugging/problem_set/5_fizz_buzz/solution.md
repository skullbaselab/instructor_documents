## Original Code

```js
function fizzBuzz(max) {
  var i = 1;
  var array = [];

  while(i < max) {
    if (i % 5 || 3 === 0 && i !== 15) {
      array.push(array[i]);
    }
    i += 1;
  }

  return array;
}

fizzBuzz(19) //=> [3, 5, 6, 9, 10, 12, 18]
```

## Debugged Code

```js
function fizzBuzz(max) {
  var i = 1;
  var array = [];

  while (i < max) {
    if ((i % 5 === 0 || i % 3 === 0) && (i % 15 !== 0)) {
      array.push(i);
    }
    i += 1;
  }

  return array;
}

fizzBuzz(19) //=> [3, 5, 6, 9, 10, 12, 18]
```
