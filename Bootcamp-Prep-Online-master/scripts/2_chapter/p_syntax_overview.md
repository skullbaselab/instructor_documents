## Syntax

### `;`

Every statement needs a semi-colon at the end. This is like a period in JavaScript. Although you may find that your programs will sometimes work without
them **leaving out semi-colons is a very bad practice because it makes your code
more error prone**. Do not forgot to end each of your statements with a semicolon.

### `( )`

Parentheses are used when defining functions and calling functions. We will talk
more about defining functions below. When calling a function, if you forget to add the parentheses, you'll see that it evaluates to `[Function]` - that is how Node represents the function object. To actually run the function, you must add parentheses.

For an example, see below:

```
> "Happy".toUpperCase;
[Function]

> "Happy".toUpperCase();
"HAPPY"
```

### `{ }`

Curly brackets are used to specify the block of code of a function definition. They wrap around a block of code that is run when a function is called.

```javascript
function sayHi(name) {
  return "Hi, " + name + "!"; //block of code to be run
}
```

Semi-colons, parentheses and curly brackets also have other uses in JavaScript which we'll introduce and explore as we continue learning more.
