## adults Walkthrough

<iframe src="https://player.vimeo.com/video/213732324" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
function adults(people) {
  var names = [];

  for (var i = 0; i < people.length; i += 1) {
    var person = people[i];
    if (person.age >= 18) {
      names.push(person.name);
    }
  }

  return names;
}
```
