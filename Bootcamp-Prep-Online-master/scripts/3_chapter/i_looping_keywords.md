There are two keywords that we can use to really have control over the structure and flow of our loops. Those words are `break` and `continue`.

### `continue`

Both keywords are used inside of the body of the loop. `continue` tells the JavaScript interpreter to stop where it is and *continue* to the next iteration of the loop.

Let's look at an example:

```js
for (var i = 0; i < 10; i++) {
  if (i === 3 || i === 6) {
    continue;
  }
  console.log(i);
}
```

If we run this, we see that all the numbers except 3 and 6 were printed. This is because when i is equal to 3 or equal to 6, the `if` statement's condition evaluates to true and the interpreter executes the code block. In this case, the code block contains a `continue` statement mean the program *continues* to the next iteration of the loop, skipping the rest of the code in the `for` loop block, `console.log(i)`.

### `break`

`break` tells the JavaScript interpreter to stop where it is and leave the loop all together. It won't go on to the next iteration like `continue`. Let's look at the code:

Let's use a `while` loop this time:

```js
var i = 0;

while (i < 10) {
  if (i === 3 || i === 6) {
    break;
  }

  console.log(i);
  i += 1;
}
```

What do you think will happen. Take a guess... Ok, we see that it prints the number up to 3. When `i` became 3, we satisfied the condition of the `if` statement and hit the `break` keyword, which end the loop.

`continue` makes the loop to go on to the next iteration, while `break` ends the loop completely.
