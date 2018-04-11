## `setInterval`

Let's say I wanted to call a function over and over again:

```js
function annoyingMeow() {
  setTimeout(annoyingMeow, 1000);
  console.log("meow");
}
```

Run this code. Does the behavior make sense? "meow" will be logged every second because `annoyingMeow` is recursively setting a timeout on itself.

**NB**: A *recursive* function is any function that calls itself inside of its function body. `annoyingMeow` is a recursive function because is sets up the next call to itself inside of its function body.

There is an alternative way to call a function over and over again, and that is with `setInterval(cb, ms)`:

```js
function annoyingMeow() {
  setInterval(function() {
    console.log("meow");
  }, 1000);
}
```
We've done a couple of new things in this function:

* The first argument to `setInterval`, the `cb` argument, we passed is an anonymous function. Remember, an anonymous function is simply a function that doesn't have a name. Get used to seeing these because they are very popular in JavaScript.
* `setInterval` will call the function (`cb`) over and over again every certain number of milliseconds, specified by the `ms` argument.

Because `setInterval` will call the callback over and over again, there is no need to make it recursive (like in the `setTimeout` version).

Pop Quiz!

Can you determine why we couldn't have just passed in the `console.log("meow")` method itself as such:

```js
function annoyingMeow() {
  setInterval(console.log("meow"), 1000);
}
```

When the JavaScript interpreter hits this code, it will immediately run `console.log("meow")` and pass its return value to the `setInterval` function. What does `console.log` return? `undefined`. When we pass `undefined` as the callback for `setInterval` or `setTimeout`, nothing happens.

We never what to pass function calls to `setInterval` or `setTimeout`, only function objects!
