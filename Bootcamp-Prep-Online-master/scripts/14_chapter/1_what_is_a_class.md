# What is a Class?

We have created several objects before during this course (usually cats). Let's create three cats:

```js
var cat1 = {
  name : "Kitty",
  age : 2,
  meow : function() {
    console.log(this.name + " says meow.");
  }
};

var cat2 = {
  name : "Whiskers",
  age : 7,
  meow : function() {
    console.log(this.name + " says meow.");
  }
};

var cat3 = {
  name : "Whitney",
  age : 11,
  meow : function() {
    console.log(this.name + " says meow.");
  }
};
```

This code is violating the DRY (Don't Repeat Yourself) rule. What if I wanted to add a new property to my cats (like color) or modify the `meow` method of each cat? As the code is right now, I'd have to find everywhere in my code where I created a cat and change each cat object. Or what if I needed to create 1000 cat objects? To create each object by hand would be very error-prone. So how can we solve this? **Classes**.

Think of a class as a blueprint for an object. If we create a `Cat` class, we can use it to create as many cat objects as we need. We will specify all of the properties and methods that are common to all cats on the class, DRY'ing up our code considerably. We can then create new `cat` objects on the fly with our `Cat` class.

The next rest of this chapter will go over the how we can create custom classes and give them built-in properties and methods.
