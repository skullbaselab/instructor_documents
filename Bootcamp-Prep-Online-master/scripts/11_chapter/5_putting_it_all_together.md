# Quick Review

Callbacks, Closures, and Higher-Order Functions:

* A function is a callback if it is passed to a function as an argument and executed inside of the function.

* A closure is any function that refers to and/or updates values that were in scope when the function was created. The cool thing about closures is that the scope doesn't have be exist anymore for the function.

* A higher-order function is any function that either:
  - accepts a returns a function
  - returns a function as its return value

* All functions that expect a callback as an argument are higher-order functions

* Not all functions are callbacks or closures.

```js
function foo(param){
  var localVar = 4 + param;
  return param;
}

//foo is not a callback or a closure
```

* A function can be both a callback and a closure.


```js
var varInOutsideScope = 4;

function foo(param){
  return varInOutsideScope + param;
}

setTimeout(foo, 1000);

//foo is both a callback and a closure
```
