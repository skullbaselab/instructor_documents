# Closures
~SCREENCAST START~
In JavaScript, every function has access to the variables from outer and enclosing scopes. Functions that use these variables (also known as free variables) are called **closures**.

Closures have access to the outer functions variables even after the outer or enclosing function returns. To the code!

```js
function sayHelloFirstName(firstName) { // the outer function
  var greeting = "Hello";

  function sayHelloFirstNameLastName(lastName) { // the inner function
    // inner functions have access to outer function variables
    // including parameters
    return greeting + " " + firstName + " " + lastName;
  }

  return sayHelloFirstNameLastName;

}


var helloAnthony = sayHelloFirstName("Anthony");
// what's the data type of helloAnthony?

var helloAnthonyLadson = helloAnthony("Ladson");
// what's the data type of helloAnthonyLadson?

console.log(helloAnthonyLadson);
// what does does this print?
```

When functions in JavaScript execute (i.e. are called), they have access to all the variable names that were in scope when they were defined. This is why the `helloAnthony` function has access variables inside of `sayHelloFirstName`, *even after that function is no longer in scope*.
~SCREENCAST END~
~SCREENCAST START~
In addition to being able to refer to variables that where in scope when it was created, a function can also modify those variables.

```js
function makeCounter() {
  var count = 0;

  var incrementCounter = function() {
    count++;
    console.log(count);
  }

  return incrementCounter;
}

var counter = makeCounter(); // returns function incrementCounter
counter(); // what does this print out?
counter(); // what does this print out?
counter(); // what does this print out?
```

Why does calling the function counter increment count? Because the inner function `incrementCount` stores a reference to the variable `count`. Each call of the function accesses the `count` variable and increments it by 1.
~SCREENCAST END~
