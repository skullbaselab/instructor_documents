## Conditionals

A **conditional** is a statement that evaluates to either *truthy* or *falsey*. We can use conditionals to create branching logic within our programs and solve more complex problems.

**NB**: Unsure about truthy and falsey, review [here][m2f_booleans].

[m2f_booleans]:../chapter_2/f_booleans.md

## `if` Statements

More specifically, we can use the keyword `if` to construct `if` statements. We use them in conjunction with conditionals to determine whether or not to execute blocks of code. The basic structure is:

```js
if (condition) {
	// some statement
	// or statements
}
```

`condition` can be any expression that evaluates to truthy or falsey. If it evaluates to true, then whatever is between the curly brackets is evaluated. If it evaluates to false, then the interpreter skips over and ignores the block between the curly brackets.

Let’s look at an example where the condition is the Boolean `true`.

```js
if (true) {
	console.log(“learning how to code is challenging”);
	console.log(“but the challenge is learning”);
}
```
We would expect to see the two statements between the curly brackets printed to the screen. The Boolean `true` always evaluates to true. Try it out on your Terminal/Control Prompt!

What about something a little less obvious:

```js
if (5 > 0) {
	console.log(“five is greater than 0”);
}

if (5 < 10) {
	console.log(“five is greater than 10”);
}
```

We’d expect to see `“five is greater than 0”` printed to the screen but not `“five is greater than 10”`.  This makes sense because `5 > 0` evaluates to `true` and `5 > 10` evaluates to `false`. What happens when the condition evaluates to false?

```js
if (false) {
	// do something
}
```

The interpreter reads the `if` statement, evaluates the condition, and if the result is falsey, it skips over the any and all statements between the curly brackets.
