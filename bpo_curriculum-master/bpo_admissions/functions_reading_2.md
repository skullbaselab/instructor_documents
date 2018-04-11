## An average example

When we specify what data to use for a function call, we refer to that process as
**passing arguments to the function**.

```js
// this is a function definition
function avg(num1, num2) {
  var sum = num1 + num2;
  var average = sum / 2;
  return average;
}

// this is a function call
avg(10, 16);

// this is another function call
avg(5, 13);
```

When we call the function `avg(10, 16)`, we run the code inside the *definition*
for `avg`. That is, we plug in the parameters with real numbers (`num1` becomes `10`
  and `num2` becomes 16). Think of `num1` and `num2` as *variables* that contain the
  values we pass in when we called the function. Then we proceed by running the code
  inside the function. The parameter names `num1` and `num2` used through the body
  of the function behave like variables.

**Did you know?** the terms `parameter` and `argument` are often used interchangeably
in casual programmer talk, but the words refer to different things. In the case of
our `avg(10, 16)` function call, `num1` and `num2` in the function definition are
parameters, and the actual numbers, `10` and `16`, are arguments!

#### Using a Return Value
Now that we know how functions evaluate let's see how a return
value can be used. We'll use `console.log` to see the result we get from the
`avg` function.

```js
function avg(num1, num2) {
  var sum = num1 + num2;
  var average = sum / 2;
  return average;
}

// if we want to check what a function returns we can do this:
var result = avg(10, 16);
console.log(result);       // prints `13`

// or this:
console.log(avg(10, 16));  // prints `13`
```

When we *call* a function, we jump to the function definition and run the code
inside. When hit a `return` statement we immediately exit the function and jump
back to where we *called* the function and evaluate the function call to the value
it *returned*. Every function call evaluates to it's return value! In other words,
the expression `avg(10, 16)` evaluates to `13` just like how the expression `1 + 1` evaluates to `2`.

One thing to watch out for is that once we hit a return value we will exit the
function immediately. This means that any code after a return will not be executed!

```js
function myFunc() {
  console.log('before return');
  return 'a return value';
  console.log('after return');
}

myFunc(); // only prints `before return`
```

Here's some food for thought: the above code only prints out `before return`, why
don't we see `a return value` printed out? Hint: we will only *see* data that we
print out using `console.log`

We can also write functions that don't have return statements. If a function is
not explicitly given a return value, it will automatically return `undefined`


### Anatomy of a Function
To wrap up, here is the general syntax used to define a function:

```javascript
function nameOfFunction(param1, param2, param3, paramN) {
  // function body...
  return "a return value!";
}

// Or we can define a function using a variable
var nameOfFunction = function(param1, param2, param3, paramN) {
  //function body...
  return "a return value!";
}
```

By writing a function we can reuse code over and over again to solve similar problems with
different input data (arguments). For this reason, functions will be your bread and butter
for programming.
