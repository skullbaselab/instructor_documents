## `setTimeout`

Computers are very fast, and when the interpreter hits a function invocation, it typically executes the code immediately. Sometimes, however, we may not want to execute that function immediately. JavaScript has a built-in method to accommodate this requirement. It's called `setTimeout(cb, ms)`. It takes as its parameters a callback (`cb`) and the number of milliseconds (`ms`) to wait before executing that callback. Let's look at an simple example:

```js
function helloWorld() {
  console.log("Hello World");
}

function delayedHelloWorld(ms) {
  setTimeout(helloWorld, ms);
}
```

If we run this in node:

```js
> delayedHelloWorld(1000);
undefined

// one second later...
> Hello World

> delayedHelloWorld(5000);
undefined

// five seconds later...
> Hello World
```

`setTimeout` is what's called an *asynchronous function*. This means that it will not block the execution of the thread. We will discuss asynchronous behavior in-depth a later lesson, but for now, it is good enough to know that if there is code after a `setTimeout`, the interpreter will go ahead and run that code instead of waiting until the callback has been run. Let's test this idea by looking at a modified version of our `delayedHelloWorld` function:

```js
function delayedHelloWorld(ms) {
  setTimeout(helloWorld, ms);
  console.log("I will be logged first");
}
```

Run it in node:

```js
> delayedHelloWorld(1000);
I will be logged first
undefined

// one second later...
> Hello World
```

Let's see what happens when we run it with a millisecond count of 0 and -1:

```js
> delayedHelloWorld(0);
I will be logged first
undefined
> Hello World

> delayedHelloWorld(-1);
I will be logged first
undefined
> Hello World
```

Regardless of the millisecond count, `setTimeout` will always run the callback function *after* everything in the current thread has finished executing. Let's again modify our `delayedHelloWorld` function to use an anonymous function instead of the named function `helloWorld`:

```js
function delayedHelloWorld(ms) {
  setTimeout(function () {
    console.log("Hello World");
  }, ms);
}
```

This is equivalent to what we wrote before. The first argument to `setTimeout` is the function object, the second argument is the millisecond count.
