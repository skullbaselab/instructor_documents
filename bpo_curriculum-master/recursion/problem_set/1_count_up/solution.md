## countUp Walkthrough

<iframe src="https://player.vimeo.com/video/242302743" width="100%" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## countUp Solution Code

```js
function countUp(num) {
  if (num >= 10) {
    console.log('done!');
    return;
  }

  console.log(num);
  countUp(num + 1);
}
```
