## printUsersWebsitesInfo Walkthrough

<iframe src="https://player.vimeo.com/video/208725791" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
var users3 = [
  {
    username: "UserName1",
    sites: [
      { url: "siteName1.com", load: " 21%",  userCount: 210000, pop: 32 },
      { url: "siteName2.com", load: " 21%",  userCount: 210000, pop: 32 }
    ]
  },
  {
    username: "UserName2",
    sites: [
      { url: "siteName3.com", load: " 21%",  userCount: 210000, pop: 32 },
      { url: "siteName4.com", load: " 21%",  userCount: 210000, pop: 32 },
      { url: "siteName5.com", load: " 21%",  userCount: 210000, pop: 32 }
    ]
  }
];

function printUsersWebsitesInfo (users) {
  for (var i = 0; i < users.length; i++) {
    var user = users[i];
    console.log("~~" + user.username + "~~");

    for (var j = 0; j < user.sites.length; j++) {
      var site = user.sites[j];
      console.log("  -" + site.url);
      console.log("    -load:" + site.load);
      console.log("    -# of users:" + site.userCount);
      console.log("    -popularity score:" + site.pop);
    }
  }
}

printUsersWebsitesInfo(users3);
```
