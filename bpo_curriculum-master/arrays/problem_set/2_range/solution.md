## range Walkthrough

<iframe src="https://player.vimeo.com/video/206629555" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function range(start, end){
  var array = [];

  for(var i = start; i <= end; i += 1){
    array.push(i);
  }

  return array;
}
```
