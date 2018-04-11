##Function Scope

JavaScript has function scope, which means that every time we create a new function we also create a new scope.

This means that I can create two functions and declare the same variable names in them without worrying about overwriting one of the variables. For example:

```js
function func1() {
  var name = "Anthony";
  console.log("Hello, " + name);
}

function func2() {
  var name = "Fred";
  console.log("Hello, " + name);
}

func1(); // what does this print to the screen?
func2(); // what does this print to the screen?
```

Calling `func1` prints `Hello, Anthony` to the screen because the name binding for the variable `name` evaluates to `Anthony` in `func1`'s scope. Calling `func2` print `Hello, Fred` to the screen because the name binding for the variable `name` evaluates to `Fred` in `func2`'s scope. `var name = "Fred"` does not overwrite `var name = "Anthony"` and vice versa, because even though they have the same variable names, they are declared in different scopes.

It also means that if we create a variable inside of a function  that has the same name as a variable in an outer scope, the variable in the outer scope won't be overwritten. For example:

```js
var myVar = 20;

function foo() {
  var myVar = 2;
  return myVar + 5;
}

foo(); // what does this function call return?
myVar; // what does this variable evaluate to?
```

`foo()` returns `myVar + 5`. `myVar` is declared inside of `foo`'s scope (i.e. we declared it in the function body). Thus it evaluates to the value `2` and the function call returns `7`. The variable `myVar` declared and referenced outside of the function body is declared in the outer scope. Thus is evaluates to `20`.

However, if we neglect to use `var`, we will overwrite the variable in the outer scope. For example:

```js
var myVar = 20;

function foo() {
  myVar = 2;
  return myVar + 5;
}

foo(); // what does this function call return?
myVar; // what does this variable evaluate to?
```

`foo()` returns `7` but `myVar` now evaluates to `5`. It was overwritten by the line `myVar = 2`.

We will explore the purpose of the `var` keyword more, but first we have to learn about the global object.
