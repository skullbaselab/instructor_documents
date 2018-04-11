## printUsers Walkthrough

<iframe src="https://player.vimeo.com/video/208725870" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
var users1 = [
  { id: 0, username: "UserName1" },
  { id: 1, username: "UserName2" }
];

function printUsers (users) {
  for (var i = 0; i < users.length; i++) {
    var user = users[i];
    console.log(user.id + ": " + user.username);
  }
}

printUsers(users1);
```
