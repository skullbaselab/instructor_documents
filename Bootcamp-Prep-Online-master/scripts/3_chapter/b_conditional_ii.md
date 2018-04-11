## `else` Statements

In this lecture, we'll expand our understanding of the `if` statement. What if you want to do one thing if the condition is true and another thing if the that condition is false? Well, you’re in luck.

There’s an optional `else` keyword that can be used with `if` statements. The basic structure looks like this:

```js
if (condition) {
	statement1;
} else {
	statement2;
}
```
Like before, if `condition` evaluates to true then `statement1` is executed (i.e. the code between the curly braces after the `if` statement). Otherwise, if the condition evaluates to false then `statement2` is executed (i.e. the code between the curly braces in the `else` statement).

What would you expect to see printed to the screen with this example?
```js
if (5 > 0) {
	console.log(“five is greater than 0”);
} else {
	console.log(“five is greater than 10”);
}
```
Check to see if your guess is correct.


## `else if` Statements
What if you want to do one thing if a condition is true and another thing if another condition is true? Well, you’re in luck again. You may use the` else if` key phrase to have multiple conditions tested in sequence. The basic structure is as follows:

```js
if (condition1) {
	statement1;
} else if (condition2) {
	statement2;
}
```

Major things to note when using `if`/`else if `statments:
 + You must always have an `if` statement to have an `else if` statement.
 + You can have as many `else if` statements following an `if` statement.

In other words, this is correct:
```js
if (condition1) {
	statement1;
} else if (condition2) {
	statement2;
} else if (condition3) {
	statement3;
} else if (condition4) {
	statement4;
} else if (condition5) {
	statement5;
}
.
.
.
} else if (conditionN) {
	statementN;
}
```

But this is not:
```js
else if (condition1) {
	statement1;
} else if (condition2) {
	statement2;
}
```

In the case of multiple conditions (an `if` statement and multiple `else if` statements), only the first logical condition which evaluates to true will be executed. Meaning if `condition3` in the follow example is true, the computer reads and executes only the code following that statement's curly brackets. In this case, `statement3`.

```js
if (condition1) {
	statement1;
} else if (condition2) {
	statement2;
} else if (condition3) {
	statement3;
} else if (condition4) {
	statement4;
} else if (condition5) {
	statement5;
}
.
.
.
} else if (conditionN) {
	statementN;
}
```

# Combining Them All!
Lastly, let's see how `if` and `else if ` statements interface with `else` statements. The basic structure looks like this:
```js
if (condition1) {
	statement1;
} else if (condition2) {
	statement2;
} else if (condition3) {
	statement3;
}
.
.
.
} else if (conditionN) {
	statementN;
} else {
  // do this if none of the conditions above evaluate to true!
}
```

The code block in the `else` statement evaluates only when none of the conditions of the corresponding `if`/`else if` statements evaluate to true. In other words, you include `else` if there's something you want to do if none of the cases are true.

Things to note when using `if`/`else if`/`else` statements:
 + You must always have `if` statement *first* to have an `else if` or `else` statement.
 + You may have as many `else if` statements following an `if` statement.
 + You must start your block of conditional statements with *one* `if` statement.
 + You can end your sequence of conditional statements with *one* `else` statement.
