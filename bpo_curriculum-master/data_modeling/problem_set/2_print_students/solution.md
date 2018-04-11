## printStudents Walkthrough

<iframe src="https://player.vimeo.com/video/208552584" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js

var students2 = [
  {
    name : "Anthony",
    id : 0
  }, {
    name : "Winnie",
    id : 1
  }, {
    name : "Pawandeep",
    id : 2
  }
];

function printStudents(students) {
  for (var i = 0; i < students.length; i++) {
    var student = students[i];
    console.log(student.name, 'is student #' + student.id);
  }
}
```
