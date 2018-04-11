# Function Scope Revisited

Now we are going to introduce a very powerful idea: closures. But before we get into that topic, make sure you are comfortable with scope in JavaScript.

For a quick recap: the scope of a function is the set of variables that are available for use within the function. The variables that are available when we call a function include:

* the function parameters
* any local variables declared inside the function
* any variables that were declared when the function was first defined

Let's look at an example:

```js
// the outer scope
var bar = 20;

function foo(arg) {
  // the inner scope
  return arg + bar;
}

var result = foo(30);
console.log(result);
```

You'll see the answer is 50! The function has access to the `bar` variable that was in scope when it was defined.
