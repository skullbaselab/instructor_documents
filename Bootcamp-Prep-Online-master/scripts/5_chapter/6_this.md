### `this`

To recap: if a function is a value in an object, it is as a *method* of that object.

There will be times when you will want a method to refer to either the object it belongs to or other properties in that object. The keyword `this` exist in every function and it evaluates to the object that the method is being called on. If that sounds abstract, let's look at an example:

```js
var spaceship = { fuel : 100 };
```

I want to write a function called 'fly', that will fly if there's enough fuel or print an error message if there isn't.

```js
spaceship.fly = function(){
  if(this.fuel >= 50){
    this.fuel -= 50;
    return "You have a calm flight...";
  } else {
    return "Sorry. Not enough fuel.";
  }
};
```
Inside the method, this evaluates to the object `spaceship`. Thus `this.fuel` evaluates to `spaceship.fuel` which evaluates to `100`.

When we call the method `fly`, `this.fuel -= 50` evaluates to `spaceship.fuel = spaceship.fuel - 50`.
```js
> spaceship.fly();
'You have a calm flight...'

> spaceship.fuel;
50
```

Of course, we can also write the method using `this` when we initialize the object:

```js
var spaceship = {
  fuel : 100,

  fly  : function() {
    if(this.fuel >= 50){
      this.fuel -= 50;
      return "You have a calm flight...";
    } else {
      return "Sorry. Not enough fuel.";
    }
  }
}

spaceship.fly(); // calling the method
```
