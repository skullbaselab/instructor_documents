## Debugging

 *"A computer is a stupid machine with the ability to do incredibly smart things, while computer programmers are smart people with the ability to do incredibly stupid things. They are, in short, a perfect match."*
</br>
 -Bill Bryson

**Debugging** is the process of fixing any mistakes in our code. It is an essential skill to hone as a programmer.
When first learning how to program, debugging will be incredibly frustrating. New coders often quit their pursuit of programming
when the going gets tough - when they hit bugs. For this reason, it is important to get into a healthy debugging mindset.
Repeat this mantra: *When my code doesn't work as intended, it is because I told the computer to do the incorrect thing.*

Computers are "dumb" in that they will follow our instructions **literally** and **exactly** as we state them. Bugs are caused
when *we* as programmers fail to thoroughly express *our* ideas to the computer. When you hit a bug, don't make the rookie
mistake of blaming the computer for the error. Show maturity as a problem solver by being methodical. Look for gaps in *your*
logic; find out where *you* misdirected the computer. Don't make excuses. Own it. Get to work and fix it. There is always a
*reason* for why our programs are misbehaving. Solving an error after hours of debugging is one of the most rewarding feelings you will
have, so have patience as you debug.

With the pep talk out of the way, let's learn to squash some bugs!

## Common Error Types

The "best" types of errors to have are the ones that JavaScript will catch for us. Let's take a look at some common error types.

### SyntaxError

Incorrect JavaScript syntax. A syntax error is a matter of using incorrect language. To
communicate with our computers, we must "speak" to them through a language they
understand (like JS). For example, incorrectly matching symbols like braces and parentheses will
lead to this common error.

```js
// missing brace
function foo()
  console.log('I am foo');
}
```

```js
var = 42;
// missing variable name
```

### ReferenceError

The variable referred to does not exist. Be careful writing variable names,
they are case sensitive.

```js
var myNum = 42;
console.log(num);
// `num` is a undeclared variable
```

### TypeError

Using a data type incorrectly. Double check your variables to make sure they are
the type you think they are!

```js
var myNum = 42;
myNum("hello");
// cannot call a number like a function
```

### Reading Error Messages

You may have noticed that some errors in our code will prevent code being run at
all. Let's run this program with a glaring syntax error:

```js
// debuggingDemo.js
console.log('Hello');
var = 42;
```

When we try to run this file, we get an error message that starts like this:

```
/Users/Instructor/Desktop/debuggingDemo.js:2
var = 42;
    ^
SyntaxError: Unexpected token =
```

1. The first line in the error message will be about *where* the error occurred. My file
is located in the folder `/Users/Instructor/Desktop/`.

2. After the name of
our file is the *line number* that JavaScript is complaining about and the line of code, in this
case it is line `2`. **The line number in error messages is not necessarily where the issue is.** In fact, the issue may be nowhere near that line number.

3. Finally, we are told the *type* of error.


### Avoid Bugs (in style!)

*"Beauty is more important in computing than anywhere else in technology because software is so complicated. Beauty is the ultimate defence"*
</br>
—David Gelernter

The best way to debug your code is to avoid bugs in the first place! Good style
can help prevent bugs because it will make mistakes obvious. Style makes little difference
in how the computer interprets our code, but it eases our own understanding of our code.
For example, we indent code in a particular way so it is easy to spot what code lies in which
structures. This can help us spot misplaced lines or missing braces. If you are trying to debug
code that is hard to follow, consider refactoring (rewriting) it. Use good style, descriptive
variable names, and decompose complex problems into helper functions! Follow our style guide.

### Debug by Printing (`console.log`)

*"The most effective debugging tool is still careful thought, coupled with judiciously
placed print statements."*
</br>
—Brian W. Kernighan

A bug is usually caused by a discrepancy in what we *think is happening* vs what
*is actually happening* in our code. Luckily we have a handy tool, `console.log`,
that allows us to peek inside our variables and check what values they contain. Use a print statement to verify if
the data is changing as you expect it to. As you debug, print the values of all essential variables like counters, parameters,
etc.. You'll be surprised at what you may have missed! `console.log` is one of the first
tools we learned to use, but don't take it for granted. It will become your main debugging tool for the rest of your career.

### Don't be Afraid to Start Over

*"One of my most productive days was throwing away 1000 lines of code."*
</br>
— Ken Thompson


Don't fall into the trap of trying to debug a round-about, messy solution so it works.
Sometimes it's better to go back to the drawing board rethink your strategy. Don't
settle for a convoluted solution.
Even if you decide to stick with your current strategy, consider rewriting the code
anyways. If you start fresh, the second time you attempt the problem you may spot an
aspect you didn't see on your initial attempt.

Can you spot what's wrong with this loop?

```js
for(var i = 0; i < 10; i += 1); {
  console.log(i);
}
```

The above code incorrectly prints out `10` and not `0` through `9`.
It may not be obvious when you look at it, but when you rewrite this loop on your
own, you'll probably fix the issue. It's quite common to make one-off typo mistakes that have a major impact on our code.
Scroll to the bottom of these notes to see the answer.

### Ask for Help

*"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible,
you are, by definition, not smart enough to debug it."*
</br>
-Brian W. Kernighan and P. J. Plauger

This is a funny statement, but it speaks a lot of truth. If you overlooked a detail in your code, you are naturally going to have
a rough time identifying what you overlooked. Otherwise, you wouldn't have overlooked it to begin with! Luckily, as a software
engineer, you'll be working in a team. By simply asking for help from a peer, you can save yourself a lot of wasted time. You
don't always have to debug alone. A fresh set of eyes on code will bring a new insight. Being able to work in a team and knowing
when to ask for help is an invaluable skill. Get help from your fellow programmers! Post a question in the Bootcamp Prep chat so
TAs and other students can lend a hand. We're all happy to help.

### General Debugging Tips

+ Start with the error message if there is one. Be sure that you are running the
correct file from the correct location. This is easy to overlook so don't get
fooled by running the wrong file!

+ Keep the error type in mind as you scan through your code, but be aware that there
may be multiple issues in your code though.

+ Start at the error line number, but don't get tunnel vision. The problem in your
code may be somewhere else completely, so be ready to check other parts of our code.

+ If you don't get an error message but a your program gives an incorrect output,
think about **how** that output came to be. Did you print out a variable? -Where does
that variable get assigned it's value? Did you get an infinite loop? -How does the
loop counter change over time? Etc..

+ Use `console.log` to check the values of your variables. Make sure they are what
you expect them to be.

+ Avoid guessing and checking! Be methodical and understand **why** your code gave
you an incorrect result before you try to fix it.

</br>
</br>
</br>
</br>
Answer: there is an extra semicolon before the `{`
