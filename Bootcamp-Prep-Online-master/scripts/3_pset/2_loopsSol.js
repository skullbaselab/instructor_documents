/*
Define a function logBetween(lowNum, highNum) that will print every number
from lowNum to highNum, inclusive. Inclusive means that the range includes
lowNum and highNum.

Examples:
> logBetween(-1, 2);
-1
0
1
2

> logBetween(14, 6);

> logBetween(4,6);
4
5
6
*/

function logBetween(lowNum, highNum) {
  for(var i = lowNum; i <= highNum; i += 1) {
    console.log(i);
  }
}

// test cases:
console.log("--logBetween--");
logBetween(-1, 2);
logBetween(14, 6);
logBetween(4,6);

/*
3 and 5 are magic numbers. Define a function fizzBuzz(max) that takes a
number and prints out every number from 0 to max that is divisible
by either 3 or 5, but not both.

Example:
> fizzBuzz(20);
3
5
6
9
10
12
18
*/

function fizzBuzz1(max) {
  for(var i = 0; i < max; i += 1) {

    if(i % 3 === 0 && i % 5 !== 0) {
      console.log(i);
    } else if(i % 5 === 0 && i % 3 !== 0){
      console.log(i);
    }

  }
}

// test cases:
console.log("--fizzBuzz--");
fizzBuzz(20);

/*
Define a function isFactorOf(number, factor) that returns true if factor
is a factor of number and false otherwise.

Examples:
> isFactorOf(6,2);
true

> isFactorOf(-6,2);
true

> isFactorOf(5,0);
false
*/

function isFactorOf(number, factor) {
  return (number % factor === 0);
}

// test cases:

isFactorOf(6,2);
isFactorOf(-6,2);
isFactorOf(5,0);
/*
Define a function isPrime(number) that returns true if number is prime and
false otherwise. Assume number is a positive integer. A prime number is a
number that is only divisible by itself and one.

Examples:
> isPrime(2);
true

> isPrime(10);
false

> isPrime(15485863);
true

> isPrime(3548563);
false
*/

function isPrimse(number) {
  // your code here...
}

// test cases:
