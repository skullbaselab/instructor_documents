## Bootcamp Prep Curriculum Highlights

In both Bootcamp Prep online and live our language of choice is the ES5 flavor
of JavaScript. You may be more familiar with ES6 syntax from a/A's immersive course,
but fear not, this doc will highlight some things to follow when coding with a prep student.
The rule of thumb is to avoid any ES6 features all together. The easiest way to get
a feel for what features students will use is to go through the Bootcamp Prep assessment video solutions

### Use `var` to declare variables

We will be using `var` to declare variables and not `let` or `const` from ES6.
Use `var` to be consistent with the curriculum notes, especially in the scope
section. The main difference is `var` has function scope and `let` has block scope.

```js
// do this
for (var i = 0; i < 5; i++) {

}
```

```js
// avoid this
for (let i = 0; i < 5; i++) {

}
```

### Use function declaration syntax

Opt to use function declaration style over function expression style when defining
functions. Student's have an easier time wrapping their heads around the former.

```js
// do this
function myFunc(param1, param2) {

}
```

```js
// avoid this
var myFunc = function (param1, param2) {

}
```

Avoid using arrow functions or anonymous functions as well. Anonymous functions are touched
on later in the course, but using them often may distract as we try to drive home
core programming concepts.

### Avoid higher order functions and callbacks

Avoid using methods like `Array.prototype.forEach` and `Array.prototype.map`. Methods
that take in callbacks are covered later in the course, but introducing them earlier
may add unnecessary confusion.
