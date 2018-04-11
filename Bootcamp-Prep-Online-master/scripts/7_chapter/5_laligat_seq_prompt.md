Let's practice decomposition using an example. First, let's read the question prompt and try to understand what's being asked of us:

Write a function `laligatSequence(base, n)` that returns an array of size `n` containing the laligat sequence of the `base`.

A number's laligat sum is the the sum of all the prime numbers less than or equal to that number. For example, the laligat sum of 10 is: 2 + 3 + 5 + 7 = 17

We can use the laligat sum to define a special sequence, called the *laligat sequence*. The laligat sequence of a number begins with the number itself (in this case, the `base` argument). The second number in the sequence is the first number's laligat sum, the third number is the second number's laligat sum, and so on.

For example, the first 4 numbers in the laligat sequence of 10 are: 10, 17, 58, 381.

A sequence's length is specified by the `n` argument.

Examples:
```
> laligatSequence(10, 4)
[ 10, 17, 58, 381 ]

>laligatSequence(5, 2)
[ 5, 10 ]
```

Questions to ask when looking at any prompt:

* What data type is being returned?
* Do the examples match my understanding of the problem?
* Are there any implicit subproblems?
