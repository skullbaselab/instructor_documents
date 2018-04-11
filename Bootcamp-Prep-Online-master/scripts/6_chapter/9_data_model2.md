Take a look at the next example:

```js
// Create the data object that this function is expecting
//Example
// printUsersWebsites(users2)
// ~~UserName1~~
//   -siteName1
//   -siteName2
// ~~UserName2~~
//   -siteName3
//   -siteName4
//   -siteName5
// ...and so forth, for all the users
```

Like before, let's take a look at the function `printUsersWebsites` so we can gain some insight:

```js
function printUsersWebsites (users) {
  for (var i = 0; i < users.length; i++) {
    var user = users[i];
    console.log("~~" + user.username + "~~");

    for (var j = 0; j < user.sites.length; j++) {
      var site = user.sites[j];
      console.log("  -" + site.url);
    }
  }
}
```

What can we determine from this function:
  * The input `users` will again be be an array. We know because we are iterating through it.
  * `users`, like last time, is an array of objects. We know this because each `user` has arbitrary keys. That is a sign of this being an object
  * The property `sites` on each user object is itself an array. I can conclude this because we are iterating through it and using bracket notation to access elements from it.
  * Each element in a user's `sites` array is itself an object with the key `url`

Let's try to make some data that can be used by this function.

Well, we know users needs to be an array.

```js
var users2 = [];
```

And inside of the array are a bunch of objects.


```js
var users1 = [
  {}, {}, {}
];
```

And each object (`user`) has the properties `username` and `sites`. `sites` is an array.

```js
var users1 = [
  {
    username : "UserName1",
    sites : []
  }, {
    username : "UserName2",
    sites : []
  }
];
```

Each element in `sites` is itself an object with a `url` key


```js
var users1 = [
  {
    username : "UserName1",
    sites : [{ url : "siteName1" }, { url : "siteName2" }, { url : "siteName3" }]
  }, {
    username : "UserName2",
    sites : [{ url : "siteName1" }, { url : "siteName2" }]
  }
];
```

Uncomment the test case and run your program!
