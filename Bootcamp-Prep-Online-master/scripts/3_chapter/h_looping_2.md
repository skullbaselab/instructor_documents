### `while` Loops
A `for` loop is only 1 way to structure a loop. We can also use `while` loops. You
can think of a `while` loop as a deconstructed `for` loop. In fact, let's transform our
`printN` function from using a `for` loop to using a `while` loop.

First, instead of the keyword `for` we use the keyword `while`.

```js
function printN(num) {
  while (var i = 0; i < num; i += 1) {
    console.log(i);
  }
}
```

Now if we were to run this right now, we'd get an error. Unlike a `for` loop, a `while` loop doesn't have all its information about the looping behavior inside of its defining parentheses. The initialization has to happen before the loop starts.


```js
function printN(num) {
  var i = 0;

  while (i < num; i += 1) {
    console.log(i);
  }
}
```

The incrementation has to happen at the end of every loop in the body of the loop.

```js
function printN(num) {
  var i = 0;

  while (i < num) {
    console.log(i);
    i += 1;
  }
}
```

But like before, the condition is the parameter when dealing with `while` loops. And it kind of reads like English: "`while` `i` is less than `num`" do all this stuff between the brackets. But it is up to you to manage the initialization and the incrementation.
