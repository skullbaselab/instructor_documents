## everyOtherWord Walkthrough

<iframe src="https://player.vimeo.com/video/210321236" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


## Solution Code

```js
function everyOtherWord(sentence) {
  var words = sentence.split(' ');
  var arr = [];

  for (var i = 0; i < words.length; i += 2) {
    var word = words[i];
    arr.push(word);
  }

  return arr;
}
```
