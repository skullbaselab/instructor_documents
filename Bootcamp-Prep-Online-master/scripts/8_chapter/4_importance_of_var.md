## `var`

You may have noticed that the `var` keyword is optional. If not, go ahead and try to initialize a variable without using it.

```js
> myOtherVar = "no var";
undefined

> myOtherVar;
"no var"

> global.myOtherVar;
"no var"
```

So why would we ever use `var`? Because if we don't, the variable will look up the scope chain for the binding, or until it hits the global scope. Let's return to an example that we've seen before:

```js
var myVar = 20;

function foo() {
  var myVar = 2;
  return myVar + 5;
}


myVar === 20; // what does this output?
foo() === 7; // what does this output?
myVar === 20; // what does this output?
```

However, if we neglect to use `var`, we will overwrite the variable in the outer scope. This is because instead of confining the binding to the local scope, `myVar` tries to reference the closest declaration it can find in the scope chain.

```js
var myVar = 20;

function foo() {
  myVar = 2;
  return myVar + 5;
}

myVar === 20; // what does this output?
foo() === 7; // what does this output?
myVar === 20; // what does this output?
myVar === 2; // what does this output?
```
