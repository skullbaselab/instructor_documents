/**********************************************************
Write a function longWordCount(string, n) that takes in a
string and returns the number of words longer than n
characters.

```js
> longWordCount("", 3);
0

> longWordCount("short words only", 6);
0

> longWordCount("one reallylong word", 9);
1

> longWordCount("two reallylong words inthisstring", 9);
2

> longWordCount("seventy schfifty five", 7);
1
**********************************************************/

function longWordCount(string, n) {
  var count = 0;
  var words = string.split(" ");

  for (var i = 0; i < sentence.length; i++) {
    var word = words[i];
    if (word.length > n) {
      count += 1;
    }
  }

  return count;
}
