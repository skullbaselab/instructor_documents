## Objects

An object is a data structure that stores data. Objects
associate keys with values. Keys are always strings while values can be any
data type: numbers, strings, functions, arrays, objects, anything! Objects are defined by curly brackets `{}`.

```js
> var dog = {};
undefined

> dog
{}
```
Arrays are another data structure that we've learned about that stores other data. Objects differ from arrays in two important ways:

* Instead of identifying and accessing elements using their indices, elements in objects are identified and accessed by their associated keys (which are always strings).

* The order of elements in an object is not guaranteed. When you iterate through the elements in an object, they may not be in the same order they were added to the object, unlike elements in arrays. But like arrays, the only way to access elements in an object is through *indexing*.

~SCREENCAST START~
### Accessing Elements
We can create new key-value pairs and access them using *bracket notation*, `[]`:
```js
> dog["name"] = "Rover";
'Rover'

> dog["type"] = "Husky";
'Husky'

> dog["name"];
'Rover'

> dog["type"];
'Husky'
```
It is similar to indexing an array. However, because elements are accessed by their keys and not indices, between the brackets we write the key we want to access. Once again, keys are always strings.

We can also use what's called *dot notation*, `.`, to add key-value pairs and index into an object:

```js
> dog.bark = "Bowowowo";
'Bowowowowo'

> dog.bark;
'Bowowowo'

> dog;
{ name: 'Rover', type: 'Husky', bark: 'Bowowowowo' }

> dog.name;
"Rover"
```

Notice, you need quotation marks when using bracket notation, but not when using dot notation. Without quotes, the interpreter tries to evaluate what's between the brackets as a variable. If the variable is undefined, it evaluates to `undefined` and then the interpreter tries to index into the object using the key `undefined`.

```js
> dog[name]
Error message...

> name
Error message...

> dog["name"]
"Rover"

> dog."name"
Error message...

> dog.name
"Rover"
```

**NB**: When should you use bracket notation versus dot notation? In most cases, you can use the two notations interchangeably. However, you can only use dot notation when you know the key. When you don't, then you have to use bracket notation. You'll see an example of this when we learn how to iterate through an object.
~SCREENCAST END~

~SCREENCAST START~
### Initializing Objects
We can also create the entire object in a single statement.
```js
> var dog2 = {
... name : "Silver Fang",
... type : "Wolf",
... bark : "Rawrrrr"
... };
undefined

> dog2;
{ name: 'Silver Fang', type: 'Wolf', bark: 'Rawrrrr' }

> dog2.name;
'Silver Fang'

> dog2["type"];
'Wolf'
```

Like indexing into an array with a non-existent index, indexing into an object using a non-existent key returns `undefined`.
```js
> dog2.breed;
undefined
```
~SCREENCAST END~


~SCREENCAST START~
### Methods vs Functions

As we said before, values of objects can be any data type, including functions!

A **method** is a function that belongs to an object. It is referred to as a method of that object. For example:

+ `myFunc` is a function
+ `myObject.myFunc` is a method of the object `myObject` (accessed using dot notation)
+ `myObject["myFunc"]` is a method of the object `myObject` (accessed using bracket notation)

Methods can be defined just like any other key-value pair.
```js
var dog = {
  bark : function () {
    console.log("woof woof woof");
  }
}

dog.howl = function () {
  console.log("woooo ooooooo");
};

dog["growl"] = function () {
  console.log("arrrgggghhhh");
};
```
You call methods in the same way as you call functions (by adding parentheses following the function name).
```js
> dog.bark();
> dog.howl();
> dog.growl();
```
~SCREENCAST END~

## Why are Objects useful?

With them, the structure of our data can match our semantic understanding of their relationships. This helps manage the complexity of keeping related data together and makes it easier to reason about the correctness of our programs.

~SCREENCAST START~
## Useful Methods

#### **`Object.keys`**

This method accepts an object as the argument and returns an array of all of its keys.

```js
var dog = {
  name : 'Rover',
  age : 12,
  bark : function () {
    console.log("woof woof woof");
  }
}

Object.keys(dog); //=> ["name", "age", "bark"]
```
~SCREENCAST END~
