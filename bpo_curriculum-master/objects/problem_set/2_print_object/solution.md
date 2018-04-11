## printObject Walkthrough

<iframe src="https://player.vimeo.com/video/207178240" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function printObject(obj) {
  for (var k in obj) {
    console.log(k + ' - ' + obj[k]);
  }
}
```
