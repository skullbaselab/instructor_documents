## Objects

*"Bad programmers worry about the code. Good programmers worry about data structures and their relationships."*
</br>
-Linus Torvalds

An object is a data structure that stores other data, similar to how an array stores elements. Objects
associate keys with values. Keys are always strings while values can be any
data type: numbers, strings, functions, arrays, objects, anything!

Objects, however, differ from arrays in two important ways:

* Data in an array comes in a key-value pair.

* Instead of indexing with numbers, objects are indexed with keys (which are always strings).

* Order is not guaranteed in an object. When you iterate through the data in an object,
it may not be in the same order it were entered in. We know that arrays are ordered starting
at index 0.

Objects are defined by curly brackets `{}`. Let's open up the console and make some objects.

```js
// Let's create an empty object
> var dog = {};
undefined

> dog
{}
```

### Bracket Notation

Creating an empty object is simple, but how can we store data inside of the object? Since data is stored
in a pair, we must state both the key and value. We can add new key-value pairs using bracket notation `[]`
and the assignment operator, `=`. Notice that the key inside the brackets is represented with a string:

```js
> dog['name'] = 'Rover'
'Rover'

> dog['type'] = 'Husky'
'Husky'

> dog['name']
'Rover'

> dog['type']
'Husky'

> dog
{name: 'Rover', type: 'Husky'}
```

When we enter `dog['name']`, we are using `'name'` as our key. The `'name'` key
then "unlocks" the corresponding value to give us our `dog`'s name, `'Rover'`!

**Did you know?** Indexing an object is very similar to indexing an array, so don't get tripped up.
The difference is what *type* of data we use to index. Arrays are indexed using numbers, Objects are
indexed using strings. Try to relate your existing understanding of arrays to objects.

```js
// Let's compare some similar object and array operations...
var obj = {name: 'Fido', title: 'the Loyal'};
var arr = ['Fido', 'the Loyal'];

console.log(obj['name']);   // => 'Fido'
console.log(arr[0]);        // => 'Fido'

obj['title'] = 'the Great';
arr[1] = 'the Hungry';

console.log(obj);           // => { name: 'Fido', title: 'the Great' }
console.log(arr);           // => [ 'Fido', 'the Hungry' ]

console.log(obj['age']);    // => undefined
console.log(arr[2]);        // => undefined
```

### Undefined Values in Objects

What happens if we try to access a key that is not inside the object?

```js
> dog
{name: 'Rover', type: 'Husky'}

> dog['color']
undefined
```

**If we try to access a key that is not inside an object we get `undefined`**. This
falls right into place with our understanding of where `undefined` shows up in
JavaScript. It's the common default value of a lot of things. `undefined` sneaks its
way into unassigned variables, out-of-array elements, and non-existent object values.

Using this knowledge, we can check if a key does not exists in an object:

```js
> dog
{name: 'Rover', type: 'Husky'}

> dog['name']
'Rover'

> dog['name'] === undefined
false

> dog['age'] === undefined
true
```

### Using Variables as Keys

Hmmm, since we know that we must put a string inside the brackets to use as a key,
what if we used a variable that contains a string? Let's keep playing with the dog
we made above:

```js
> dog
{name: 'Rover', type: 'Husky'}

> var myKey = 'name'
undefined

> myKey
'name'

> dog[myKey]
'Rover'

> dog['name']
'Rover'
```

Aha! Of course we can use a variable as our key. A variable always evaluates to the
value we assigned it. If we have done `var myKey = 'name'`, then that means that
`dog[myKey]` and `dog['name']` are equivalent. Why is this useful? We know that
variables can change; so now the keys we use for objects can change! Dynamic code is useful code.

### Dot Notation

We can also use what's called dot notation `.` to set up our key-value pairs. When
we use dot notation, we don't need to use string quotes as around the key:

```js
> dog
{name: 'Rover', type: 'Husky'}

> dog.bark = "Bowowowo";
'Bowowowowo'

> dog.bark
'Bowowowo'

> dog
{ name: 'Rover', type: 'Husky', bark: 'Bowowowowo' }
```

### Bracket vs Dot

Now that we know two ways to access values of an object, when should we use
bracket notation or dot notation? Dot notation is more readable and simpler to write
because we don't have to fiddle with quotation marks. However, bracket notation allows
us to use variables that contains the keys.

There are tradeoffs for both, so practice using both! You will learn pretty
quickly that there are tons of ways to write the same thing in JavaScript. These
options are different tools to solve different problems. Have both in your
tool-belt to be a versatile programmer!

Let's look at the difference:

```js
var myDog = {};
myDog.name = 'Fido';

// let's use a variable as our key and some bracket notation...
var myKey = 'name';
console.log(myDog);         // prints `{name: 'Fido'}`
console.log(myDog[myKey]);  // prints `Fido`

// what if we try to use the variable in dot notation...
console.log(myDog.myKey);   // prints `undefined`
```

When we use dot notation to write `myDog.myKey`, `myKey` will
**not be interpreted by JavaScript as a variable**. The text we write after the `.`
will be used as the **literal** key. Remember that if we try to use a key that does
not exist in an object, we get back the default value of `undefined`.

```js
console.log(myDog.myKey);   // prints `undefined`
myDog.myKey = '???';
console.log(myDog);         // prints `{name: 'Fido', myKey: '???'}`
console.log(myDog.myKey);   // prints `???`
// mind === 'blown'
```

### Putting it all together

We can also create an entire object in a single statement:

```js
var myDog = {
  name: 'Fido',
  type: 'Doge',
  bark: 'Rawrrrr',
  age: 2,
  favoriteToys: ['bone', 'ball']
};

console.log(myDog.age); // prints `2`
console.log(myDog.favoriteToys); // prints `['bone', 'ball']`
```

In an object, `keys` will always be strings, but the `values` can be any data
type we please, numbers, strings, arrays, etc.. We will even see that a value
can be a function up next!

### Existence in Array vs Existence in Object

Let's compare a common array pattern to the analogous object pattern.

The general pattern to check if an element is not in an array:

```js
if (arr.indexOf(el) === -1) {
  console.log('el is not inside of arr!');
}
```

The general pattern to check if a key is inside of an object:

```js
if (obj[key] === undefined) {
  console.log('key is not inside of obj'!);
}
```

Notice how the patterns above compare. It is easy to mix up the similar operations and patterns between
arrays and objects. However, the differences are important. The **type** of data we have should dictate
what operations we can use on the data.

### Why are Objects Useful?

Now that we know quite a bit about Objects, how can they be used in a practical sense? Where we use
an array house collection of similar things, we objects to model a single entity. This sounds
confusing, but take a look at the examples we went over above. Using an object, we were able to
model a dog (when you go to a/A you'll build many animal objects). Each key-value pair of an object
can represent a property of the entity we are trying to model.

What if we wanted to model a Bootcamp in JavaScript. An Object is the perfect tool for the job.
Let's represent App Academy and some of it's properties:

```js
var bootcamp = {
  name: 'App Academy',
  color: 'red',
  isOpen: true,
  yearFounded: 2012,
  population: 100,
  locations: ['SF', 'NY'],
  instructors: ['Ali', 'Meagan', 'Oscar', 'Maurice']
}
```

Over the course of time, the Bootcamp will change, thus our object should change:

```js
bootcamp.instructors.push('Mashu');
bootcamp.population++;

bootcamp.instructors; // => [ 'Ali', 'Meagan', 'Oscar', 'Maurice', 'Mashu' ]
bootcamp.population;  // => 101
```

Objects are a staple of JavaScript programming for this reason! They may seem difficult to wield at
first, but mastery will come with time and practice!

**Did you know?** Another name for a key-value pair of an object is a "property".
