# Creating Classes

Functions have many roles in javascript: creating new abstraction layers, creating new scopes, etc.. Functions are also the way we create new classes in JavaScript.

It is technically incorrect to say that a function is how we create a new class. The construct we are introducing to you is technically called a *Constructor*. While a Class and a Constructor are technically different things, for our purposes, they are synonymous.

Let's create the `Cat` class:

```js
function Cat() {

}

var cat1 = new Cat();
var cat2 = new Cat();
var cat3 = new Cat();

console.log(cat1);
console.log(cat2);
console.log(cat3);
```

If we run this file in the console:

```
Cat {}
Cat {}
Cat {}
```

There you have it. In the above code, we created a `Cat` class, then used it to create three cat objects. Now, these cat objects are essentially empty objects that were created from an empty class, but there are two things we can learn about Javascript classes from this example:

* A Javascript classes starts, by convention, with a capital letter.
* The `new` keyword is used to create an object (also called an instance) from the Constructor.
