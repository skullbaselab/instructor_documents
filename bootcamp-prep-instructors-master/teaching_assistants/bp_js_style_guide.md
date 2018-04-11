## Bootcamp Prep Style Guide

This is an outline of some fundamental style guidelines you should practice whenever
you write code with a bootcamp prep student. When commenting on their code, you should
keep these style points in mind as well. This is important as a student may interact
with different TAs during tutoring sessions or in assessment feedback. The goal
is to be consistent in the advice we give students!

### Indentation

Indentation is the number one culprit for bootcamp prep students. Never let them
put off proper indentation. Failing to indent will lead to incorrect line placement
as well as the dreaded mismatched brace.

```js
// Good style:
function skip5(){
  for (var i = 1; i < 10; i += 1){
    if (i === 5) {
      continue;
    }
    console.log(i);
  }
}

// Bad style:
function skip5(){
for (var i = 1; i < 10;i += 1){
if (i === 5) {
  continue;}
console.log(i);
}}
```

### Whitespace

Advise student to use spaces around binary operators (symbols that operate on two things)
such as `+`, `*`, `=` , `+=`, `<=`, etc.

```js
// Good style:
var num1 = 3;
var num2 = 5;
if (num1 + num2 === 8) {
  console.log("the sum is 8");
}

// Bad style:
var num1=3;
var num2 =5;
if (num1+num2=== 8) {
  console.log("the sum is 8");
}
```

Don't use a space around unary operators like `++`, `--`, etc..

```js
// Good style:
myNum++;

// Bad style:
myNum ++;
```

#### Comma spaces

Use a space after `,` in arrays and objects and after `;` in for loops.

```js
// Good style:
var names = ['alvin', 'chase', 'phi', 'eliot'];
var dog = {name: fido, age: 2};
for (var i = 0; i < 10; i++) {

}

// Bad style:
var names = ['alvin','chase','phi','eliot'];
var dog = {name: fido,age: 2};
for (var i = 0;i < 10;i++) {

}
```

### Large Arrays and Objects Indentation

```js
// good style
var dog = {
  name: 'Fido',

  age: 12,

  favoriteToys: [
    {
      name: 'ball',
      color: 'red',
    },
    {
      name: 'bone',
      color: 'white',
    }
  ]
};

var names = [
  'alvin',
  'chase',
  'phi',
  'eliot'
];
```

### Vertical Space

Advise students to use blank lines to section off different logical sections in
their code. This is especially valuable to highlight loops. Beginners will mistakenly
place lines of code inside of loops.

```js
// Good style:
function sumArray(arr){
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    var ele = arr[i];
    sum += ele;
  }

  return sum;
}

// Not as good style for bootcamp prep:
function sumArray(arr){
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    var ele = arr[i];
    sum += ele;
  }
  return sum;
}
```

### Intermediate Variables

Advise students to use variables to store values to refer to complex expressions.
Be clear with the student that these are not *needed*, but they can be used to help
track complicated data. This will also increase readability if you choose a descriptive
name. A good variable name will act as a label.

```js
// Good style:
function printStudents(arr) {
  for (var i = 0; i < arr.length; i++) {
    var name = arr[i];
    console.log(name.toUpperCase());
    console.log(name.toLowerCase());
  }
}

// Not as good style:
function printStudents(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i].toUpperCase());
    console.log(arr[i].toLowerCase());
  }
}
```

Use variables to "label" complex expressions. Good variables can act as notes:

```js
// Nice and readable:
var num = 15;
var isDivByEither = (num % 5 === 0 || num % 3 === 0);
console.log(isDivByEither);


// Not as readable:
var num = 15;
console.log(num % 5 === 0 || num % 3 === 0);
```

### Semicolons

Nitpick student to never omit semicolons! Students will definitely question why we
should put semicolons, if it will be correct to our computer either way.
Use the reasoning below:

**Semicolons separate different expressions in our code. This helps JavaScript interpret
our code.**

It is technically "correct" to write all our code on a single line. We break lines
to make our code readable for other humans. However, when we run code on our computers,
the JavaScript interpreter will look for semicolons.

See this example where omitting a semicolon is deadly. It is technically correct
to not break lines, but what happens if we don't use a semicolon:

```js
// Not good style, but still runs:
console.log('hello'); console.log('world');

// Worse style and does not run at all:
console.log('hello') console.log('world')
```

If students are having trouble remembering where to put semicolons and where to not
put semicolons, reassure them that it will become second nature with time. Advise
them to look at any code in the curriculum for examples of correct semicolon placement.

### Modular Functions

Don't allow students to write long and complex functions that take on too much
responsibility. Advise students to decompose problems into smaller helper functions.
Attacking problems in this way will also pay off on a bootcamp interview. Strong
students may be able to solve problems without helper functions. That's fine,
but it is still a good point to bring up. For struggling students, demand that
they use helper to aid their understanding.

```js
// okay style, only strong students may be able to understand and explain this:
function avgOfEachArray(arrays) {
  var avgs = [];

  for (var i = 0; i < arrays.length; i++) {
    var subArray = arrays[i];
    var total = 0;

    for (var j = 0; j < subArray.length; j++) {
      total += subArray[j];
    }

    var avg = total / subArray.length;
    avgs.push(avg);
  }

  return avgs;
}

avgOfEachArray([[10, 15, 20], [0, 8], [6, 8]]) // => [ 15, 4, 7 ]
```

```js
// better style, readable:
function avgArray(array) {
  var total = 0;

  for (var i = 0; i < array.length; i++) {
    total += array[i];
  }

  return total / array.length
}

function avgOfEachArray(arrays) {
  var avgs = [];

  for (var i = 0; i < arrays.length; i++) {
    var subArray = arrays[i];
    var avg = avgArray(subArray);
    avgs.push(avg);
  }

  return avgs;
}
```
