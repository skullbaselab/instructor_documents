### catBuilder

```js
// Write a function `catBuilder(name, color, toys)` that returns a cat object
// object with the corresponding properties.
//
// Example:
//
// var cat1 = catBuilder('Whiskers', 'black', ['scratching-post', 'yarn']);
// cat1; // => { name: 'Whiskers', color: 'black', toys: ['scratching-post', 'yarn'] }
//
// var cat2 = catBuilder('Nyan', 'rainbow', ['poptarts']);
// cat2; // => { name: 'Nyan', color: 'rainbow', toys: [ 'poptarts' ] }
```

### printObject

```js
// Write a function `printObject(obj)` that prints out all key-value pairs of an
// object. HINT: use a for loop.
//
// Example:
//
// var bootcamp = {
//  name: 'App Academy',
//  color: 'Red',
//  population: 120,
// };
//
// printObject(bootcamp); // prints
//
// `name - App Academy`
// `color - Red`
// `population - 120`
```

### Debug the Programs

```js
var cat = {
  sound : "Meowr",
  purr : function() {
    return (sound + "..." + sound);
  }
}

cat.purr() === "Meowr...Meowr";
```

### Predict The Output

```js
var dog1 = { name: 'Rover', age: 2 };
var dog2 = { name: 'Curie', age: 7 };
var dog3 = { name: 'Maxie', age: 15 };

var dogs = [dog1, dog2, dog3];

function howOld(array) {
  var result = [];

  for (var i = 0; i < array.length; i += 1) {
    var element = array[i];

    if (element.age < 7) {
      sentence = element.name + " is " + element.age + " years young.";
    } else {
      sentence = element.name + " is " + element.age + " years old.";
    }

    result.push(sentence);
  }

  return result;
}

howOld(dogs);
```
