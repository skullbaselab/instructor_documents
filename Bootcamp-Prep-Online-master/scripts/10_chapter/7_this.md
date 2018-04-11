## Binding

### `thisArg` for `Array.prototype.forEach`

If the callback function we pass to `Array.prototype.forEach` utilizes the `this` keyword, we'll need to bind it to the appropriate object. To do this, we can use `Function.prototype.bind` or simply pass in the `thisArg`. Below, I've created four different ways of accomplishing the correct binding (and an example of the incorrect way):

```js
var cookieMonster = {
  name : "Cookie",

  favoriteFoods : ["apple", "cookie", "orange"],

  badLogFavFoods: function() {
    this.favoriteFoods.forEach(function(food) {
      console.log(this.name + " loves " + food + "!");
    });
  },

  logFavFoods1: function() {
    this.favoriteFoods.forEach(function(food) {
      console.log(this.name + " loves " + food + "!");
    }.bind(cookieMonster));
  },

  logFavFoods2 : function() {
    this.favoriteFoods.forEach(function(food) {
      console.log(this.name + " loves " + food + "!");
    }, cookieMonster);
  },

  logFavFoods3 : function() {
    this.favoriteFoods.forEach(function(food) {
      console.log(this.name + " loves " + food + "!");
    }.bind(this));
  },

  logFavFoods4 : function() {
    this.favoriteFoods.forEach(function(food) {
      console.log(this.name + " loves " + food + "!");
    }, this);
  }
}
```

The key thing to realize is that every time we enter into a new function, the value of `this` changes. Since callbacks are functions, if the callback is using `this`, we always need to make sure it is bound to the proper object.
