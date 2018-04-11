###  `mySelect`

Write a function `mySelect(arr, cb)` that accepts an array and a callback. It should pass each element, its corresponding index, and the array itself to the callback. It should return a new array of all the elements in the input array `arr` where the callback `cb` returns true.

```js
> mySelect([1,2,3,4,5,6], function(ele, i, arr) {
..  return (ele % 2 === 0);
..});
[2,4,6]

> mySelect([1,2,3,4,5,6], function(ele, i, arr) {
..  return (i % 2 === 0);
..});
[1,3,5]
```
