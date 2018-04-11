## printFives Walkthrough

<iframe src="https://player.vimeo.com/video/213574946" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function printFives(max) {
  for (var i = 0; i < max; i += 1) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }
}
```

```js
function printFives(max) {
  for (var i = 0; i < max; i += 5) {
    console.log(i);
  }
}
```

```js
function printFives(max) {
  var i = 0;
  while (i < max) {
    if (i % 5 ===0) {
      console.log(i);
    }
    i++;
  }
}
```

```js
function printFives(max) {
  var i = 0;
  while (i < max) {
    console.log(i);
    i += 5;
  }
}
```
