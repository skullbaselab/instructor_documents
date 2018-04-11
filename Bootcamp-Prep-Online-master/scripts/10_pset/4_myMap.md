### `myMap`
Write a function `myMap(arr, cb)` that accepts an array and a callback. It should pass each element, its corresponding index, and the array itself to the callback. Do not use the built in `Array.prototype.map` method. It should return an array where each element is the return value of the callback given the element in the corresponding position. See the examples if this is confusing.

```js
> myMap([1,2,3], function(ele, i, arr) {
..  return ele * 2;
..});
[2, 4, 6]

> myMap([1,2,3], function(ele, i, arr) {
..  return ele + i;
..});
[1, 3, 5]

> myMap(["A", "B", "C"], function(ele, i, arr) {
..  return ele + i;
..});
["A0", "B1", "C2"]
```
