##Global Object

In both of the main JavaScript environments (browser and node), everything exists in what's called 'the global object'. To understand this, let's think about a plain old object:

```js
var scope = {};
```

I can create key-value pairs where the value is of any data-type. Let's create a function (method) in the object:

```js
scope.myFunc = function() {
  console.log("This is my func");
};

scope.myFunc();
```

Now if I write `scope.myFunc = 1;`, I have clearly overwritten the function I created before.

```js
scope.myFunc = 1;

scope.myFunc; // what does this output?
```

The global scope works similarly. Every variable that is declared outside of a function/method becomes a property on the global object.

Let's see an example of this. Open up your node console and type `global`. This keyword evaluates to the global object. (In the browser environment, the global object is called `window`). Let's see how things become attached to the global scope.

```js
> global.myVar;
undefined

> var myVar = 12;
undefined

> myVar;
12

> global.myVar;
12
```

When we declare variables outside of a function, aka in the global scope, they become properties of the global object.
