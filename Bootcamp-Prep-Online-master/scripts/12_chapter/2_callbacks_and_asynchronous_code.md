~SCREENCAST START~
# Callbacks and Asynchronous Code
So the question now becomes: how do I tell JavaScript to run some functionality when the asynchronous function is finished? Putting the code after the asynchronous function won't work because asynchronous code isn't thread-blocking:

```js
function foo() {
  console.log("hey!");
}

function badAsync() {
  setTimeout(foo, 1000);
  console.log("don't log me until timeout is finished!");
}

badAsync();
```

Instead, we must rely on callbacks. The reason why callbacks are so vital in Javascript is because JavaScript makes use of asynchronous code quite frequently. The fix to the above problem is below:

```js
function foo() {
  console.log("hey!");
}

function goodAsync() {
  setTimeout(function () {
    foo();
    console.log("don't log me until timeout is finished!");
  }, 1000);
}

goodAsync();
```

We create an anonymous function to pass to `setTimeout`. Inside of the anonymous function, we run the `foo` function, and then the `console.log` that we wanted to run after `foo`.
~SCREENCAST END~

~SCREENCAST START~
## Return Values, Callbacks, and Asynchronous Code
Consider the following code:
```js
function delayedAdd(num1, num2){
  setTimeout(function(){
    return num1 + num2;
  }, 1000);
}
```

We've written a function called `delayedAdd` that takes in two numbers and adds them together, however, the result isn't ready for us until `1000` milli-seconds later. The question is: *how* do we get the result of our `delayedAdd` function? In this example, we've simply return the result. This will not work. Let's think about how we get the return value from a function:

```js
var s = "happy".toUpperCase();
```

The `toUpperCase` string method returns an uppercased version of the string it's called on. We grab that return value and store it in a variable called `s`. The point is that **the only way to get the return value of a function is to CALL the function. The return value is returned to wherever the function is called.** Now let's think about this within the context of  `setTimeout`. Where is the function called? Deep within the bowels of the built-in `setTimeout` function, in a place where we do not have access or need access. Imagine `setTimeout` as a blackbox. The only thing you need to understand about it is that it will call the callback argument you pass in after the given amount of time you give it. Therefore, returning from the callback makes no sense as we won't have access to that return value.

The only way to do something with the result of an asynchronous function is to give it a callback and run the callback, passing in the result. Let's see the modified `delayedAdd` function:

```js
function delayedAdd(num1, num2, cb){
  setTimeout(function(){
    var sum = num1 + num2;
    cb(sum);
  }, 1000);
}
```

Now `delayedAdd` expects to receive a callback as the third argument. When the `setTimeout` is finally run and we finally have the sum of `num1` and `num2`, we run the callback - `cb` - and let the user of `delayedAdd` specify what they want to do with with the sum. Below are two examples usages of `delayedAdd`.

```js
delayedAdd(1, 1, function(sum){
  console.log("The sum is " + sum);
});

delayedAdd(1, 1, function(sum){
  //The user of delayedAdd can do whatever they want with the sum.
  //The specify what they want to do in the callback that is passed to delayedAdd
});
```
If our asynchronous code is expecting to return some value, the only way for us to do something with that code is by passing that asynchronous function a callback.
~SCREENCAST END~
