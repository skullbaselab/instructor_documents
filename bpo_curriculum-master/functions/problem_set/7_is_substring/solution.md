## isSubstring Walkthrough

<iframe src="https://player.vimeo.com/video/206313506" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function isSubstring(searchString, subString) {
  var lowerSearchStr = searchString.toLowerCase();
  var lowerSubStr = subString.toLowerCase();

  return lowerSearchStr.indexOf(lowerSubStr) !== -1;
}

function isSubstring(searchString, subString) {
  var lowerSearchStr = searchString.toLowerCase();
  var lowerSubStr = subString.toLowerCase();

  if (lowerSearchStr.indexOf(lowerSubStr) > -1) {
    return true;
  } else {
    return false;
  }
}
```
