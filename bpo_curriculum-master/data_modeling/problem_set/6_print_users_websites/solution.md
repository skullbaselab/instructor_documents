## printUsersWebsites Walkthrough

<iframe src="https://player.vimeo.com/video/208725830" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


## Solution Code

```js
var users2 = [
  {
    username: "UserName1",
    sites: [
      { url: "siteName1" },
      { url: "siteName2" }
    ]
  },
  {
    username: "UserName2",
    sites: [
      { url: "siteName3" },
      { url: "siteName4" },
      { url: "siteName5" }
    ]
  }
];

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

printUsersWebsites(users2);
```
