## Approach to Callbacks

At this point we've seen two functions that expect to receive a callback as an argument. Before we introduce more built-in JavaScript functions that expect callbacks, I first was to give you an approach to working we functions that expect callbacks.

Let's think back to the `setTimeout` function: who actually called the callback? The `setTimeout` function did.

We *defined* the callback, while the function we passed it to *called* it. This must be understood. **When you are working with a function that expects a callback, you only define the callback; you don't call it. That is the function's responsibility.**

There are three things you should be thinking about when you are working with a function that expects a callback:

* What parameters will the function pass the callback?
* When is the callback called?
* How is the callback used?

~SCREENCAST START~
Let's think about `setTimeout` within the context of these questions:

```js
setTimeout(function () {
    console.log("Hello");
}, 1000);
```

### What parameters will the function pass the callback?

`setTimeout` does not pass its callback any arguments. Notice that the callback we pass to `setTimeout` is not expecting any arguments.

This will not always be the case. In fact, the next function we learn about will pass its callback three arguments.

### When is the callback called?

`setTimeout` calls its callback after the however many milliseconds specified by `ms` has passed.

### How is the callback used?

`setTimeout` just calls its callback. Nothing really special here, but, again, this will not always be the case. Sometimes the return value of the callback will be important.
~SCREENCAST END~
