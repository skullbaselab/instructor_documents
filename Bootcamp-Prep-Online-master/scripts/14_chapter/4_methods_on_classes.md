# Creating Instance Methods

By now, you'd probably expect the below to be how we defined instance methods:

```js
function Cat(name, age, color) {
  this.name = name;
  this.age = age;
  this.color = color;
  this.meow = function() {
    console.log(this.name + " says meow.");
  }
}

var cat1 = new Cat("Whitney", 2, "black and white");
var cat2 = new Cat("Whiskers", 7, "red");

console.log(cat1);
console.log(cat2);

cat1.meow();
cat2.meow();
```

If we run this code:

```
Cat { name : "Whitney", age: 2, color : "black and white", meow : [Function] }
Cat { name : "Whiskers", age: 7, color : "red", meow : [Function] }
'Whitney says meow'
'Whiskers says meow'
```

If you run this file , you will see that it'll behave as expected. **BUT IT IS WRONG.** Why, you ask? Because this will create a new function object every time we create a new cat. This is unnecessary and not optimal because `meow` will return the same thing for any cat. What we want to do is define the method once and have all instances refer to that definition when they call the method. We achieve this by defining the method on the `prototype` property of the Constructor:

```js
function Cat(name, age, color) {
  this.name = name;
  this.age = age;
  this.color = color;
}

Cat.prototype.meow = function() {
  console.log(this.name + " says meow.");
}

var cat1 = new Cat("Whitney", 2, "black and white");
var cat2 = new Cat("Whiskers", 7, "red");

console.log(cat1);
console.log(cat2);

cat1.meow();
cat2.meow();
```

If we run it:

```
Cat { name : "Whitney", age: 2, color : "black and white" }
Cat { name : "Whiskers", age: 7, color : "red" }
'Whitney says meow'
'Whiskers says meow'
```

Notice that neither cat object has the `meow` function inside of it. This is what JavaScript does when we run a method:

* It first looks to see if that method exists inside of the object itself. If so, it runs the method.
* If the method is not inside of the object, JavaScript looks at that object's Constructor's prototype property. If it exists there, it runs the method.

Because JavaScript works this way, we are able to define all the instance methods on the Constructor's prototype, instead of wasting memory by defining them on every single object.
