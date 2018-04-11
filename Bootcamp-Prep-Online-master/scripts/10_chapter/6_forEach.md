# `Array.prototype.forEach`

So far, in order to iterate through an array, we've used loops, either `for` or `while` loops. Now that we know about callbacks, it's time to introduce another method that allows us to iterate through arrays: `Array.prototype.forEach(cb, thisArg)`. This method accepts a callback and an optional `thisArg` (we'll talk about this later).

Now let's think about how the `Array.prototype.forEach(cb, thisArg)` method will use its callback:

### What parameters will the function pass the callback?

The callback will be passed three arguments:

* The current element
* The index of that element
* The array itself that we are iterating over

Let's look at an example:

```js
var array = ["a", "b", "c", "d", "e"];

array.forEach(function(ele, idx, arr) {
  console.log("Current ele is: " + ele);
  console.log("Current idx is: " + idx);
  console.log("Current array is: " + arr);
  console.log("------------------------");
});
```

### When is the callback called?

`Array.prototype.forEach` The callback is called once for each element in the array. (it's a well-named function).

### How is the callback used?

Like `setTimeout`, `Array.prototype.forEach` just calls its callback. The return value in unimportant.
