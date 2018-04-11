## factorial Walkthrough

<iframe src="https://player.vimeo.com/video/240224769" width="100%" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## factorial Solution Code

```js
function factorial(n) {
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}
```
