## catBuilder Walkthrough

<iframe src="https://player.vimeo.com/video/207177866" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
// version 1
function catBuilder(name, color, toys) {
  var cat = {
    name: name,
    color: color,
    toys: toys
  };

  return cat;
}

// version 2
function catBuilder(name, color, toys) {
  var cat = {};
  cat.name = name;
  cat.color = color;
  cat.toys = toys;
  return cat;
}
```
