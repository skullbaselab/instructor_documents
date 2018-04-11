## logBetween Walkthrough

<iframe src="https://player.vimeo.com/video/206467544" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function logBetween(lowNum, highNum) {
  for (var i = lowNum; i <= highNum; i += 1) {
    console.log(i);
  }
}
```

```js
function logBetween(lowNum, highNum) {
  var i = lowNum;
  while (i <= highNum) {
    console.log(i);
    i++;
  }
}
```
