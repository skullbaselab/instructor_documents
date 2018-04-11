# Asynchronous vs. Synchronous Code

~SCREENCAST START~
Javascript, and many other languages, evaluate code in a *single thread*. Single-threaded programming languages can only evaluate one thing at a time.

**Synchronous code** is run in the order it is written (although because of control flow the interpreter may jump all over the space of the program) and blocks the thread from running anything else. Let's see an example of this:

```js
function foo() {
  console.log("start");

  for (var i = 0; i < 99999999; i+=1) {
  }

  console.log("done");
}

foo();
```

There is a noticeable delay between `"start"` being logged and `"done"` being logged. This is because the 100 billion iterations must be completed before moving on to the next subsequent line in the code. This is a prime example of synchronous code. The loops blocks the thread from running anything else and the interpreter must finish the loop before logging `"done"`.

~SCREENCAST END~
**Asynchronous code**, on the other hand, is code that will start or setup some process that usually takes some time to complete (e.g. asking a user for input, waiting for a keypress, waiting for a milli-second count, etc), but it will not block the thread while it waits. Asynchronous code will usually run some function in response to the completion of the process it was waiting for - let me give you a few examples in words:

If you were programming a Javascript video game, you'd want to tell the program to do something when the player presses a button. You wouldn't want this to be synchronous because if it was, the execution of the rest of the code would be paused until the player pressed a button. Instead, we'd prefer to let the game loop keep running, and whenever the player pressed a button our program would run the functionality we assigned to the key press.

`setTimeout` and `setInterval` are asynchronous functions. While they wait for the milli-second countdown to reach 0, the JS interpreter keeps reading the rest of the code.
