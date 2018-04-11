# Importance of Naming

Every time we create a variable, we are engaging in abstraction. We are hiding the value under the name of the variable. It is very important that we give our variables and function significant names. The names we use in our programs will become a layer of abstraction in our programs.

For example, `x` is a very non-descriptive name for a variable or a function. As as our code grows in length and complexity, we are likely to forget what it originally stood for and its purpose. This will hurt our ability to think correctly about our code and that will likely introduce a bug to our program.

~~SCREENCAST START~~

To reiterate the importance of good naming, let's look at an example of a program with poorly named functions and variables. What's the purpose of this program?

```js
function x(n, j) {
  var z = (j / n) * 100;

  if (z < 15) {
    return false;
  } else {
    return true;
  }
}
```

It's pretty hard to tell. How about if we rewrite it using good naming:

```js
function isGoodTip(mealCost, amountTipped) {
  var percentage = (amountTipped / mealCost) * 100;
  var badTip = 15;

  if (percentage < badTip) {
    return false;
  } else {
    return true;
  }
}
```

At a glance, you probably have a better idea of what this program does. It calculates if the amount tipped is a good tip or not given the cost of a meal.

~~SCREENCAST END~~

### Good Naming

**Whenever naming a variable or a function, use concise and descriptive names.**

Bad naming:
+ `x = 5 + 5;` Non-descriptive.
+ `sumOfFiveAndFive = 5 + 5;` Not-concise.

Good naming:
+ `sum = 5 + 5;` Concise and descriptive.


### Functions

Functions are a very special kind of abstraction. Instead of representing static information (like numbers, strings or arrays), functions represent *processes*. When we create a function, we are abstracting away the details of how process is implemented under the function name.

Now, in plain English, what is the following code doing?

```js
var num = '?'; // any number
num % 2 === 0;
```

You probably guessed that it's checking to see if a number is even. Now look at this code:

```js
function isEven(num) {
  return num % 2 === 0;
}
```

The function name immediately describes the process implemented in the function body. Now if I'm working in larger codebases and have to look at a lot of code, where you spend you mental energy is going to be very important. I can understand `isEven` better than I can `num % 2 === 0`. And this is just a one-line function. Imagine larger functions implementing more complicated processes. Naming your functions well will be **crucial** to understanding your system as it grows in complexity.
