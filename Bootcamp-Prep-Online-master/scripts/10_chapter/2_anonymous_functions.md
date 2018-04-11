## Anonymous Functions

Consider the following function:

```js
function hello(){
  console.log("Hello!");
}
```

What is the name of this function? `hello`. If I want to refer to this function in other parts of my programs, I use the name `hello`. Let's see how it looks when we remove the name:

```js
function (){
  console.log("Hello!");
}
```

Now what is the name of this function...? It doesn't have one! Functions without names are called **anonymous functions**. Why would be ever need to use an anonymous function? They become useful if you need to create a function that you'll never need to refer to again. And when would that happen? Well, it's actually very common for callbacks to be anonymous functions, because it is the responsibility of the function that's expecting the callback as an argument to call the callback. We (the programmer) usually (but not always) won't need to refer to these functions again. In the next few lessons, we will make extensive use of anonymous functions so you can get a better idea of how they are used to define callbacks.
