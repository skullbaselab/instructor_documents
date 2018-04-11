# Higher Order Functions

A higher-order function is one that either:

 * accepts a function as an argument or
 * returns a function as the return value.

Every function that takes a callback is a higher-order function. We've seen several higher-order functions that accept callbacks:

* `Array.prototype.forEach`
* `setTimeout`
* `setInterval`

We have not yet seen any higher-order functions that fall into the 2nd category, that is, one that return a function. Let's write one!
