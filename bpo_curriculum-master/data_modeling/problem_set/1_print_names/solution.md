## printNames Walkthrough

<iframe src="https://player.vimeo.com/video/208552614" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
var students1 = [
  { name : "Anthony" },
  { name : "Winnie" },
  { name : "Pawandeep" }
];

function printNames(students) {
  for (var i = 0; i < students.length; i++) {
    var student = students[i];
    console.log(student.name);
  }
}
```
