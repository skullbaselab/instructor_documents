## Math

`Math` is a built-in object in JavaScript that has properties and methods for mathematical constants, operations and functions.

To access it, use the keyword `Math`.

```
> Math
{}
```
Despite its appearance as an empty object, the Math object contains a lot of functionality that we can use in our programs.

+ `Math.PI` (a property) - evaluates to mathematical PI
+ `Math.abs(number)` - returns the absolute of the `number`
+ `Math.ceil(number)` - returns the smallest integer greater that or equal to the `number`
+ `Math.floor(number)` - returns the largest integer less than or equal to the `number`
+ `Math.round(number)` - returns the value of the `number` rounded to the nearest integer
+ `Math.random()` - return a (pseudo) random number between 0 and 1
+ `Math.sqrt(number)` - returns the square root of the `number`

**NB**: Never reassign the Math object. You will never be able to access its functionality again, and can break any libraries that are depending on its functionality.

In other words, NEVER DO THIS:
```
> Math = "me";
undefined

> Math.round();
// Error message...
```
