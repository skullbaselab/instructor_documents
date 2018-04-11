## countHalves Walkthrough

<iframe src="https://player.vimeo.com/video/242302362" width="100%" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## countHalves Solution Code

```js
function countHalves(n) {
  if (n < 1) {
    console.log('done!');
    return;
  }

  console.log(n);
  countHalves(n / 2);
}
```
