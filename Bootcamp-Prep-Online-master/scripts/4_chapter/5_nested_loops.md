### Nested Loops

Sometimes you will need to nest a loop inside of another loop, which means that the body of your loop will include another loop.

Let's learn more about nested loops by looking at an example problem.
```js
/*************************************************************
Write a function pairZero(ary) which takes in the argument
ary, an array of numbers. It returns an array containing all
the pairs of indices of elements in the array that sum to 0.
Note the order of the the output.

Examples:
var ary1 = [5, -5, 2, -2];
pairZero(ary1); // => [[0, 1], [2, 3]]

var ary2 = [0, 0, 0];
pairZero(ary2); // => [[0, 1], [0, 2], [1, 2]]
*************************************************************/
```
To reiterate the problem, we are being asked to write a function called `pairZero` which takes as its input arrays of numbers. It outputs an array of arrays. Each inner array contains two numbers, which are pairs of indices of elements in the array that sum to 0. For example, `ary1[0]` evaluates to `5` and `ary1[1]` evaluates to `-5`. `5 + -5 === 0`, thus index 0 and 1 are a pair of indices of elements in `ary1` that sum to 0.

This problem is more complex than ones we've solved before. Before thinking about how you would code a solution, think about how you would solve this problem not using programming. If someone gave me a list of numbers on a piece of paper and asked me to write down all the pairs of numbers that sum to 0, I'd would think to look at all the possible pairs of numbers in the list. To do it systematically, I would look at all the pairs that exist that include the first number in the list. Then I would look at all the pairs that include the second number in the list, and so on. Let's translate this approach into JavaScript code.

```js
function pairZero(ary) {
  var pairs = [];

  for(var i = 0; i < ary.length; i += 1){
    for(var j = 0; j < ary.length; j += 1){
      if(ary[i] + ary[j] === 0){
        var pair = [i, j];
        pairs.push(pair);
      }
    }
  }

  return pairs;
}
```

Let's break down the solution above:
+ An array called `pairs` is first initialized and eventually returned.
+ In between, there's a nested loop.
+ There's a `for` loop which iterates through the function argument `array` using the counter variable `i`. It's the *outer* loop.
+ In the body of the outer loop is another `for` loop, the *inner* loop.
+ The inner loop also iterates through the function argument `array`. However, it does so using the counter variable `j`.
+ The inner loop's counter can't be `i` because that's the outer loop's counter. *The counter of the inner loop must always be different than the counter of the outer loop*. If that's not the case, `i` is incremented by the inner loop. When the inner loop ends, the outer loop increments its incrementer (which is also `i`) and checks its condition... it's counter will be over incremented. If this is confusing, try changing our solution by replacing all `j`'s with `i`'s.
+  In the body of the inner loop, we check if `array[i]` and `array[j]` sum to 0. If they do, a variable `pair` is initialized to an array of the indices `i` and `j`.
+ This array is then pushed to `pair` (in other words, it's added as an element to the end of the array). `pair` is an array of arrays! It holds all of the pairs of indices of elements that sum to 0.
+ By returning `pair` at the end of the function body, the function call evaluates to the correct answer.

However, when we run test cases using this solution our output does not exactly match the examples in the problem description.

```js
var ary1 = [5, -5, 2, -2];
pairZero(ary1); // => [[0, 1], [1, 0], [2, 3], [3, 2]]

var ary2 = [0, 0, 0];
pairZero(ary2); // => [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2]]
```
There are a few issues with our solution:
+ Our answer contains duplicate inverse pairs.
+ We are adding every element to itself. If the array contains a 0, then we will add the same pair of indices into the array.

Let's fix our solution by iterating only the indices after `i` in the inner loop. We do this by initializing the inner loop's `j` to be `i + 1`. This ensures that (1) we won't have any inverse duplicates and (2) we'll never compare an element to itself.

```js
function pairZero(ary) {
  var pairs = [];

  for(var i = 0; i < ary.length; i += 1){
    for(var j = i + 1; j < ary.length; j += 1){
      if(ary[i] + ary[j] === 0){
        var pair = [i, j];
        pairs.push(pair);
      }
    }
  }

  return pairs;
}
```

### Iterating Through a Multi-Dimensional Array

We use nested loops to iterate through multi-dimensional arrays.

For example, let's iterate through a two-dimensional array (an array of arrays).
```js
var ary = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8]
];

for (var i = 0; i < ary.length; i++) {
  var innerAry = ary[i];
  
  for (var j = 0; j < innerAry.length; j++) {
    var element = innerAry[j];
    console.log(element);
  }
}

```
