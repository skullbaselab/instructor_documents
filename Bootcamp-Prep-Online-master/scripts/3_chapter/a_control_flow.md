## What is Control Flow?

**Control flow** is the order statements are executed or evaluated when a program is running. In other words, it’s the order in which a JavaScript interpreter reads your code and interprets the instructions.

If you're unsure of what I mean by this think about what happens when you are reading a book. To read it you would start at the top of the page, reading the lines from the top to bottom and at each line, reading characters from left to right. A similar thing happens when a program is run. When running a program, the computer reads the lines of code from top to bottom and each line from left to right, evaluating and executing each *statement*. The order in which these statements are exectured is called the *control flow*. We can control the *control flow* using a variety of built-in contructs, and those constructs will be the topic of the sebsequent lectures.

## Blocks Of Code

Most control flow statements are attached to what's called a code block. A code block is simply a grouping of other code surrounded by curly brackets. 

```javascript
{
	// statement1;
	// statement2;
	// .
	// .
	// .
	// statementN;
}
```

All of the control statements we'll introduce you to (`for`, `while`, `if`, `else if`, `else`) will have an associated code block. The code in the block is run according to the rules of the control statement it is attached to.

**NB**: In between the pair of curly brackets, we have some comments which are used here to indicate where code would go. In JavaScript single line comments start with `//`. Any text between `//` and the end of the line, will be ignored by the JavaScript interpreter and will not be executed.
