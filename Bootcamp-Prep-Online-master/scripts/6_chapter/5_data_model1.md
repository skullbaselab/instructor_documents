For the next problem, we up the ante even further. Look at the `students3` array on line 49. Each student, in addition to having a `name` and an `id`, now has a key called `grades`. What data type is `grades`? An array. We know this because of the square brackets. More specifically, `grades` is an array of objects (we can assume each represents a single grade). Each of these grade objects has an `id` and a `score`.

Look at the problem's example.

```js
//Write a function that will print the name of the student and their highest test score
//Example
// printBestGrade(students3)
// Anthony 84
// Winnie 100
// Pawandeep 92
```

This time we want to print each name and their highest test score. In order to do this, we'll need to iterate through each students' `grades` array and find the highest score. We can find the score of each grade by looking at the `score` key.

```js
function printBestGrade(students) {
    for(var i = 0; i < students.length; i += 1) {
      var student = students[i];
      var bestGrade; // declare the variable

      //iterate through the student's grades
      for(var j = 0; j < student.grades; j += 1) {
        var grade = student.grades[j];

        //if the bestGrade hasn't been assigned yet OR this score
        //is better than the current bestGrade...
        if(bestGrade === undefined || grade.score > bestGrade) {
          //update the bestGrade to be the current score
          bestGrade = grade.score;
        }
      }

      console.log(student.name + " " + bestGrade);
    }
}
```
