## Looping

When we are programming, a common maneuver is to do some task over and over again.
For example, imagine that we want to write a program that will print the first ten numbers to the screen.

```js
function print10() {
  console.log(0);
  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);
  console.log(5);
  console.log(6);
  console.log(7);
  console.log(8);
  console.log(9);
}
```

What if I wanted to print all the numbers from 0 to a very large number (like 2 million); it's unfeasible to write it by hand. The programmers of yore developed a programming construct that we can use called a **loop**. In essence, a loop allows us to run code repeatedly, until we tell it to stop.

Now, failure to terminate your loops will result in the deadly *infinite loop*. Blocking the execution of your program, consuming precious resources like memory and time, the deadly infinite loop is to be avoided at all costs. As we teach you how to create loops, I want you to pay special attention to how we terminate loops.

Now there are two types of loops: `while` loops and `for` loops. First, are going to talk about the `for` loop.

### `for` Loops

Let's take a look at the structure of a `for` loop:

```js
for ([initialization]; [condition]; [incrementer]) {
  //do something...
}
```

Let's talk about what these three fields mean, and how they work together. As we talk about each piece, I'll be filling in the blanks to recreate our `print10` function from before.

The *initialization* is where you initialize a variable that will be used as the counter. This counter will be updated in the *incrementer* and checked in the *condition*. In my `print10` function, the first number that's printed to the screen is 0, so I'll initialize my counter `i` at 0. I'm calling the counter `i`, which is a fairly common convention.

```js
for (var i = 0; [condition]; [incrementer]) {
  //do something...
}
```

The *condition* is a statement that evaluates to either truthy or falsey. Before running any iteration of the loop, this conditional is run. If it's true, an iteration of the loop is run. If not, the interpreter breaks out of the loop.

To decide on the condition, I have to ask when myself when I want my loop to stop printing numbers. Since I want the first ten numbers and we're starting at 0, my condition needs to be `i < 10`. As long as `i` is less that `10`, the loop continues to run. If was `i = 1`, I'd have to change the condition to `i <= 10`. Does this make sense?

```js
for (var i = 0; i < 10; [incrementer]) {
  //do something...
}
```

Before we write the incrementer, let's fill in the body of the `for` loop. This is the block of code that is run with each iteration of the loop. In this case, what's the behavior I keep repeating? `console.log`ing a number.

```js
for (var i = 0; i < 10; [incrementer]) {
  console.log(i);
}
```

Now let's talk about the *incrementer*. If I left it out and ran this loop right now, we'd get an infinite loop that would keep logging 0 to the screen. When we start the loop, we initialize `i` to `0`. We only run the loop if `i` is less than `10`. Well `0` is less than `10`, which means we will keep running the loop forever because `0` will forever be less than `10`. That is were the incrementor comes it. It is our way of guaranteeing that we won't have an infinite loop. The *incrementer* is run after every iteration of a loop and its purpose is to update the value of the counter. In the case of `print10`, I want the number to increment by 1 with every iteration, so I'll write `i = i + 1`. I can also write this like `i += 1`.

```js
for (var i = 0; i < 10; i += 1) {
  console.log(i);
}
```

And voila! We've rewritten `print10` in a fraction of the number of lines by using a loop.
