# Creating Instance Variables

We want all of our cats to have a name, age, and color property, but we want the values of those properties to be different for every cat instance.

```js
function Cat(name, age, color) {
  this.name = name;
  this.age = age;
  this.color = color;
}

var cat1 = new Cat("Kitty", 2, "red");
var cat2 = new Cat("Whiskers", 7, "black");
var cat3 = new Cat("Whitney", 11, "gray");

cat1.name === "Kitty"; //true
cat2.age === 7;        //true
cat3.color === "gray"; //true

// What is cat1.color?
// What is cat2.name?
// What is cat3.age?
```

The `this` keyword, when used inside of a constructor function, evaluates to the object that will be created when the constructor is used with the `new` keyword. In other words, when the constructor is run with the `new` keyword, the function body is evaluated, and `this` is the object that is being created.

An instance variable is a property that exists on each object. In this case, `name`, `age`, and `color` are instance variables. The canonical way to set up instance variables is to pass in the values as arguments.
