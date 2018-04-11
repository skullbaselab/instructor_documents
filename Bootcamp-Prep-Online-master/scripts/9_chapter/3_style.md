## Style

Good style promotes correctness and the readability of our programs. The more readable our program is, the higher the chance is that it will be properly executed by the computer. At some point in your career as a programmer, you will have to write code that needs to be read by other people. They may be your instructor, interviewer or co-worker. The readability of your code will directly effect your ability to get into a coding bootcamp and later a coding job.

The style conventions of a language are called *its idioms*. You always want to follow the idioms of the language you're working in because (1) they will help you write less error-prone code and (2) they are industry standards. Following them will help you debug your programs faster and promote the legitimacy of your code.

Good code should almost read like English.

~SCREENCAST START~

### JS Style Guidelines
Below are some of the most
common JavaScript style conventions. We expect you to follow them from now on:

* Always use semi-colons, `;`.

  You might have noticed that your code will run properly even without. However, that won't always be the case. Instead of learning and memorizing all of these edge cases, it's much more efficient to use semi-colons to end your statements.
* Follow semi-colons with a new line.

  For example, while this will still run:
  ```js
  var str; str = "hello"; str;
  ```
  It is convoluted and poorly styled. Do not write code that looks like this.
* Use camelCase to name your variables and files in JavaScript.

* Use the strict equality operator `===`, not the loose equality operator `==`.

  Strict equality compares two values for equality. Loose equality compares two values for equality, *after* converting both values to a common type which is not what we usually want.

  ```js
  > 5 == "5";
  true

  > 5 === "5";
  false
  ```
* Always use `var` when declaring a variable. Always declare variables before using them.

* Indent blocks of code (i.e. lines of code wrapped by a pair of curly brackets, `{}`).

* Use blank lines to set off sections of code that are logically related.

* Follow commas by a space (eg. `[0, 1, 2]` not `[0,1,2]`).

* When calling a function, do not use a space to separate the function name and the pair of parenthesis (e.g. `foo()` not `foo ()`).

* Be consistent.

Your solution to a problem may function correctly, but it isn't correct unless it is also styled correctly.

~SCREENCAST END~
