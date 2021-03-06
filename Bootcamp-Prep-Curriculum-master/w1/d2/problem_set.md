## logBetween

```js
// Define a function `logBetween(lowNum, highNum)` that will print every number
// from `lowNum` to `highNum`, inclusive. Inclusive means that the range includes
// `lowNum` and `highNum`. Hint: this function only need to print using `console.log`,
// it does not need to return.
//
// Examples:
//
// logBetween(-1, 2); // prints
// -1
// 0
// 1
// 2
//
// logBetween(14, 6); // prints nothing
//
// logBetween(4,6); // prints
// 4
// 5
// 6
```

## isFactorOf

```js
// Define a function `isFactorOf(number, factor)` that returns `true` if `factor`
// is a factor of `number`. `false` otherwise. A factor is a number that divides
// another number without a leftover remainder.
//
// Examples:
//
// isFactorOf(6,2); // => true
// isFactorOf(-6, 2); // => true
// isFactorOf(5,0); // => false
// isFactorOf(22, 7); // => false
```

## fizzBuzz

```js
// Define a function `fizzBuzz(max)` that takes a number and prints  every number
// from 0 to `max` that is divisible by either 3 or 5, but not both.
//
// Examples:
//
// fizzBuzz(20); // prints
// 3
// 5
// 6
// 9
// 10
// 12
// 18
```

## isPrime

```js
// Define a function `isPrime(number)` that returns `true` if `number` is prime.
// Otherwise, false. Assume `number` is a positive integer.
//
// Examples:
//
// isPrime(2); // => true
// isPrime(10); // => false
// isPrime(15485863); // => true
// isPrime(3548563); // => false
```

## How will these programs evaluate?

Predict what will happen in the code below, and then run the code to find out!

```js
function func1(num) {
  return num + 50;
}

function func2(num) {
  return num + " bottles of beer on the wall";
}

function func3(num) {
  var x = func1(num);
  return func2(x);
}

var result = func3(5);
console.log(result); // What does this print out?
```

```js
var foo = function(name) {
  return "Dance " + name + ", dance! "
}

var bar = function() {
  var str = "";

  for (var i = 0; i < 3; i += 1) {
    str += foo("Anthony");
    str += foo("Haseeb");
    str += foo("Winnie");
    str += " | ";
  }

  return str;
}

var result = bar();
console.log(result); // What does this print out?

```


## Debug The Programs

The following functions don't give the expected output, can you spot the problems?

```js
function sayHiNTimes(n) {
  var i = 0;

  while (i < n) {
    console.log("Hi");
  }
}
```

```js
function isFive(n) {
  if (n = 5) {
    return true;
  } else {
    return false;
  }
}
```


## Truth Tables

Complete the tables and check your work in the REPL. 


  x  | y   | z   | x && y &#124;&#124; z |  x && (y &#124;&#124; z)
-----|-----|-----|-----------------------|--------------------------
true |true |false|                       |
true |false|false|                       |
false|true |false|                       |
false|false|false|                       |


  x  | y   | z   | x &#124;&#124; y && z |  x &#124;&#124; (y && z)
-----|-----|-----|-----------------------|-------------------------
true |true |false|                       |
true |false|false|                       |
false|true |false|                       |
false|false|false|                       |
