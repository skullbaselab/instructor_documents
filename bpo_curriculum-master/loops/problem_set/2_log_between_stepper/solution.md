## logBetweenStepper Walkthrough

<iframe src="https://player.vimeo.com/video/212311890" width="100%" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


## Solution Code

```js
function logBetweenStepper(min, max, step) {
  for (var i = min; i <= max; i += step) {
    console.log(i);
  }
}
```

```js
function logBetweenStepper(min, max, step) {
  var i = min;
  while (i <= max) {
    console.log(i);
    i += step;
  }
}
```
