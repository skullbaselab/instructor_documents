## Solution Code

```js
function arrayBuilder(count) {
  var array = [];

  for (var k in count) {
    for (var i = 0; i < count[k]; i++) {
      array.push(k);
    }
  }

  return array;
}
```
