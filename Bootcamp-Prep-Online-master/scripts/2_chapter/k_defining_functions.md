## Functions

So at this point, we are already familiar with some functions. We’ve seen
`console.log`, `Array.prototype.indexOf`, `String.prototype.toUpperCase`, etc. A
function is a block of code that is aliased under a variable name. When the
function is evaluated, or called, the block of code is executed and returns a
value. A function may or may not take an argument (also called a parameter). A
parameter is some value that is passed to the function when it's run. Functions
typically utilize their parameters in the function body.

Functions can be defined two ways:

```javascript
function nameOfFunction (param1, param2) {
	//block of code to be run
}
```

or alternatively:

```javascript
var nameOfFunction = function (param1, param2) {
	//block of code to be run
}
```

What we’ve done so far is show you how to define a function. In order to actually
evaluate the code in a function, you have to call it. This is done by typing out
the function name followed by parentheses. If the function takes arguments, they
are placed inside of the parentheses.

Let’s write a function that takes in a number as an argument and returns the
that number plus five:

```javascript
function getFivePlus (x) {
	return (5 + x);
}
```

Notice here that I used the `return` keyword. Return stops the execution of the
function and makes it evaluate to whatever comes after the `return` (in
this case, `(5 + x)`). If you don’t have a return statement in the function, it will
implicitly return `undefined`.
