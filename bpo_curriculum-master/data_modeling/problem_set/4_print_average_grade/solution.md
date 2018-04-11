## printBestGrade Walkthrough

<iframe src="https://player.vimeo.com/video/208552517" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Solution Code

```js
var students3 = [
  {
    name : "Anthony",
    id : 0,
    grades : [{ id : 0, score : 84},{ id : 1, score : 20},{ id : 2, score : 80}]
  }, {
    name : "Winnie",
    id : 1,
    grades : [{ id : 0, score : 62},{ id : 1, score : 56},{ id : 2, score : 100}]
  }, {
    name : "Pawandeep",
    id : 2,
    grades : [{ id : 0, score : 79},{ id : 1, score : 92},{ id : 2, score : 49}]
  }
];

function avgGrade(student) {
  var sum = 0;
  var grades = student.grades;
  for (var i = 0; i < grades.length; i++) {
    var grade = grades[i];
    sum += grade.score;
  }
  var avg = sum / grades.length;
  return avg;
}

function printAverageGrade(students) {
  for (var i = 0; i < students.length; i++) {
    var student = students[i];
    var avg = avgGrade(student);
    console.log(student.name, avg);
  }
}
```
