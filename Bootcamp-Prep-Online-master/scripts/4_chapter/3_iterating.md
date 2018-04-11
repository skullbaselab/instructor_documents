## Iterating Through an Array

What if we wanted to access every element in an array? Say we were interested in printing to the screen each element, searching for one specific element or calculating for the sum of all elements. Well we could write it out:

```js
var ary = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

console.log(ary[0]);
console.log(ary[1]);
console.log(ary[2]);
console.log(ary[3]);
console.log(ary[4]);
console.log(ary[5]);
console.log(ary[6]);
console.log(ary[7]);
console.log(ary[8]);
console.log(ary[9]);
```

But what if we change the size of `ary`? Does this remind you of a similar problem we've already tackled?

If we want to iterate through an array, we almost always use loops. For example, let's rewrite the previous example using a `for` loop.

```js
var ary = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
for (var i = 0; i < ary.length; i++) {
  var element = ary[i];
  console.log(element);
}
```

How did we decide on the statements in the `for` loop? The indices on the array. The index of the first element in an array is always `0`. The index of the last element in an array is always one less than the length (`array.length - 1`). In order to iterate through an array from the beginning to the end, we initialize `i` to `0` and set the condition so it remains true as `i` increments by `1` after each iteration until `i > array.length - 1` or `i === ary.length`.

Let's see how we would iterate through an array using a `while` loop.
```js
var ary = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

var i = 0;
while (i < ary.length) {
  console.log(ary[i]);
  i++;
}
```

### Iterating Through an Array *Backwards*
How do we change the statements of our loops to iterate through an array from the end to the beginning? We initialize `i` to `array.length - 1`, which translates into us starting with the last element. We want to keep running the loop while `i >= 0` because all the valid elements have indices greater than or qual to 0. After each iteration, we **decrement** `i` by `1`.

```js
var ary = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

for (var i = ary.length - 1; i >= 0; i--) {
  var element = ary[i];
  console.log(element);
}
```
To see if you get this, use a `while` loop to iterate over an array backwards.
