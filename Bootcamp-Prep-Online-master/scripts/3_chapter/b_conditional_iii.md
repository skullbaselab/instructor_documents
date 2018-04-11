## `switch` Statements

JavaScript has another construct you can use to create branching logic in your code: `switch` statements.

Like `if`/`else if`/`else`, the `switch` statement is used to perform different actions based on different conditions. This is the standard structure:
```js
switch(expression) {
    case n1:
        // code block
        break;
    case n2:
        // code block
        break;
    default:
        default // code block
}
```
This is how it works:

The switch expression is evaluated first and once. The value of the expression is compared with the values of each case (e.g. `n1` and `n2`). If there is a match, the associated block of code is executed. The `break` keyword is necessary because it tells the JavaScript interpreter to break out of the switch block. This will stop the execution of more code and case testing inside the block.

Let's look at a simple example:
```js
var weekDay = "Thursday";

switch(weekDay) {
  case "Monday":
    console.log("Happy Monday");
    break;
  case "Tuesday":
    console.log("Happy Tuesday");
    break;
  case "Wednesday":
    console.log("Happy Wednesday");
    break;
  case "Thursday":
    console.log("Happy Thursday");
    break;
  case "Friday":
    console.log("Thank God it's Friday!");
    break;
}
```

The `default` keyword specifies the code to run if there no cases match the expression. It's optional like `else` is when using a  `if`/`else if` block.

```js
var weekDay = "Thursday";
switch (weekDay) {
    case "Saturday":
        console.log("Happy Saturday!");
        break;
    case "Sunday":
        console.log("Sunday Funday!");
        break;
    default:
        console.log("Looking forward to the weekend...");
}
```
**NB**: There is no `break` statement concluding the block of code after `default` because at that point the interpreter has already reached the end of the switch block and does not need to break out early.
