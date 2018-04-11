## multiply Whiteboard

<iframe src="https://player.vimeo.com/video/242292637" width="100%" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


## multiply Walkthrough

<iframe src="https://player.vimeo.com/video/242292589" width="100%" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


## multiply Solution Code

```js
function multiply(a, b) {
  if (a === 0) {
    return 0;
  }

  var answer = b + multiply(a - 1, b);
  return answer;
}
```
