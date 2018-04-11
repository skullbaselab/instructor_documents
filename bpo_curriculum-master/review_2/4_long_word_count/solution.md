## longWordCount Walkthrough

<iframe src="https://player.vimeo.com/video/209638787" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function longWordCount(sentence) {
  var count = 0;
  var words = sentence.split(" ");

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    if (word.length > 7) {
      count += 1;
    }
  }

  return count;
}
```
