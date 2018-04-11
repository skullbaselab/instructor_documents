### `myForEach`

Write a function `myForEach(arr, cb)` that accepts an array and a callback. It should pass each element, its corresponding index, and the array itself to the callback. Do not use the built-in `Array.prototype.forEach` method. The return value is irrelevant.

```js
> myForEach([1,2,3], function(ele, i, arr) {
..  console.log(ele + " is at position " + i + " in array " + arr);
..});
1 is at position 0 in array [1,2,3]
2 is at position 1 in array [1,2,3]
3 is at position 2 in array [1,2,3]
```
