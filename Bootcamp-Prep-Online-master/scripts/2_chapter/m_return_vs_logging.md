## Return vs Logging

Throughout the course, we will be asking you to write a lot of functions. Some of those functions will require you to print messages to the screen and others will require you to return a value.

In this video, I want to make the difference between logging a message and returning a value clear. `console.log` simply prints a message to the screen. It does not return a value from a function. Likewise, returning a value does not, by default, print it to the screen.

Let's take a look at the `sayHi` program we wrote in an earlier lesson:

```javascript
function sayHi(name) {
  return "Hi, " + name + "!";
}
```

In order to make sure this program is working, I'll want to write up some test cases.

```javascript
function sayHi(name) {
  return "Hi, " + name + "!";
}

sayHi("Anthony"); // test case 1
sayHi("Winnie"); // test case 2
sayHi("Ned"); // test case 3
```

If we run this file, we will see that nothing happens: no message prints to the screen. In order to see the result of the `sayHi` method, we have to log the result of each function call:

```javascript
function sayHi(name) {
  return "Hi, " + name + "!";
}

var result = sayHi("Anthony");

console.log(result);
sayHi("Winnie");
sayHi("Ned");
```

We can also wrap the entire function call with `console.log`.

```javascript
function sayHi(name) {
  return "Hi, " + name + "!";
}

var result = sayHi("Anthony");

console.log(result);
console.log(sayHi("Winnie"));
console.log(sayHi("Ned"));
```

If we tested this function in the REPL, there would be no need to log the return value because a function's return value is automatically printed in the REPL:

```
> sayHi("Anthony");
'Hi, Anthony!'
```

If a function does not explicitly return a value it will by default return `undefined`, regardless of whether it prints a value or not. The take away is be aware if a prompt is asking you to print something to the screen or return a value. If you're testing to see what your function returns, you'll have to wrap the function call in `console.log`.
