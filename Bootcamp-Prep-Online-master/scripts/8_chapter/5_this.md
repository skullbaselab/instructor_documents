## `this`

Functions and methods are objects, which allows them to be passed around without being called/evaluated. This feature of JavaScript has implications for how we think about `this`. What will the following program do?

```js
var myObj = {
  name : "Markov",
  sayHi : function() {
    console.log(this.name + " says Hi.");
  }
};

var myFunc = myObj.sayHi; // not calling sayHi

myFunc(); // what does this output?
```

If you run this code, you'll see that it prints `undefined says Hi.`. Why is that? Let's remember what `this` evaluates to: the object that is calling the function. When we assign the method to a variable, **we detach it from the object**. Therefore, when we call it and it evaluates `this`, it no longer references its original object, so what does it reference? That depends on how the function is being called.

* Method-Style: In a method that is called like `someObj.myFunc()`, the `this` will reference `someObj`.
* Function-Style: In a function that is called like `myFunc()`, the `this` will reference the global object.

Let's attach a name to the global object and try to run the earlier code again.

```js
var myObj = {
  name : "Markov",
  sayHi : function() {
    console.log(this.name + " says Hi.");
  }
};

var myFunc = myObj.sayHi; // not calling sayHi

var name = "Bill";

myFunc(); // what does this output?
```

When we run this code, we see that `myFunc()` evaluates to `Bill says Hi.`. The reason is revealed if we look at how the function is being called: Function-Style. When we call a function that isn't attached to an object, the `this` keyword evaluates to the global object. And since the global object has a `name` property of `Bill`, we end up getting `Bill says Hi.`.
