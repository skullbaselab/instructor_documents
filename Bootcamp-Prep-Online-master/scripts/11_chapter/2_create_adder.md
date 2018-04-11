# `createAdder`

We will write a function `createAdder(num)`, which will accept a number as an argument. It will return a function which we'll call it `f`. Function `f` will accept a number as an argument and return the sum of that number and the num that was passed to `createAdder`. Let's see an example:

```js
var addTwo = createAdder(2);
addTwo(2); //=> evaluates to 4
addTwo(40); //=> evaluates to 42

var addTen = createAdder(10);
addTen(2); //=> evaluates to 12
addTen(40); //=> evaluates to 50
```

Now that we know what we're trying to do, let's write it:

```js
function createAdder(num) {
  var f = function(otherNum) {
    return (num + otherNum);
  }

  return f;
}
```
In the body of `createAdder`, I define a function called `f`. `f` is a function that accepts an argument called `otherNum` and returns the sum of `num` (the argument of createAdder) and `otherNum` (its argument). Let's rewrite this using an anonymous function.

```js
function createAdder(num) {
  return function(otherNum) {
    return (num + otherNum);
  }
}
```

I am returning an anonymous function. Once again, it has access to the `num` that belonged to the scope of the outer function `createAdder`. Higher-order functions allow you to dynamically create functions that behave differently based on some input.
