## objectSelect Walkthrough

<iframe src="https://player.vimeo.com/video/211376152" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


## Solution Code

```js
function objectSelect(obj, callback) {
  var result = {};

  for (var key in obj) {
    var val = obj[key];
    if (callback(key, val)) {
      result[key] = val;
    }
  }

  return result;
}
```
