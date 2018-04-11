##Callbacks

A **callback** is a function object that is passed as an argument to another function. The callback is called inside the body of the function to which it is passed.

~SCREENCAST START~
Let's look at a small example:

```js
function foo() {
  console.log("the callback function");
}

function bar(cb) {
  console.log("before the callback");
  cb();
  console.log("after the callback");
}

bar(foo); // what will happen when we call 'bar' with the argument `foo`?
```

Anytime a function is passed to another function as an argument and is called inside of that function, it is considered a callback. One important thing to note: look at how we called the `bar` function as a callback. We passed it the function `foo` as the argument. **We did not call `foo`, but instead used the function object**. The only way to call a function is to put the parentheses behind the function name. Notice that `foo` does not have those parentheses; it is *not* being called. It is the responsibility of the function that is expecting the callback to actually *call* the callback function object. In the example above, the function `bar` calls the callback function object in the function body `cb()`.
~SCREENCAST STOP~
