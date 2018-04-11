Take a look at the example on line 6:

```js
//~~~~~~1
// Create the data object that this function is expecting
//Example
// printUsers(users1)
// 0: UserName1
// 1: UserName2
// ...and so forth, for all the users
```

Let's take a look at the function `printUsers` so we can gain some insight into how we should structure our data:

```js
function printUsers (users) {
  for (var i = 0; i < users.length; i++) {
    var user = users[i];
    console.log(user.id + ": " + user.username);
  }
}
```

What can we determine from this function:
  * The input `users` must be an array. We know this because we iterate over `users` with a for loop. You can only do that with arrays.
  * `users` is an array of objects. We know this because during each iteration, we grab the element at the `i`-th position and store it in a variable called `user`. This `user` has two keys: `id` and `username`. Only objects can have arbitrary keys.

Uncomment line 14 and let's try to make some data that can be used by this function.

Well, we know users needs to be an array.

```js
var users1 = [];
```

And inside of the array are a bunch of objects.


```js
var users1 = [
  {}, {}, {}
];
```

And each object has the properties `id` and `username`

```js
var users1 = [
  {
    id : 0,
    username : "UserName1"
  }, {
    id : 1,
    username : "UserName2"
  }, {
    id : 2,
    username : "UserName3"
  },
];
```

Uncomment the test case and run the file.
