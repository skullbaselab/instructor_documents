/******************************************************************************
Write a function passingStudents(students) that accepts an array of student objects.
It should iterate through the list of students and return an array of the names
of all the students who have an average grade of at least 70.

Example:

var students = [
  {
    "name": "Kush",
    "id": 12345,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 75}, {"id": 2, "score": 85}]
  },
  {
    "name": "Ned",
    "id": 55555,
    "grades": [{"id": 0, "score": 100}, {"id": 1, "score": 100}, {"id": 2, "score": 100}]
  },
  {
    "name": "Haseeb",
    "id": 94110,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 60}, {"id": 2, "score": 65}]
  }
];

passingStudents(students); // => [ 'Kush', 'Ned' ]
*******************************************************************************/



function passingStudents(students) {
  var answer = []
  for (var i = 0; i < students.length; i++) {
    var student = students[i]
    var count = 0
    for (var j = 0; j < student.grades.length; j++){
      var grade = student.grades[j]
      var count += grade.score  // this line gives a syntax error,
                                // count was previously defined so you should not use var here -AZ
    }
    if ((count/3) >= 70) {  // what if the we have a number of grades that's not 3 -AZ
                            // reference the length of array
    answer.push(student.name)
    }
  }
  return answer
}



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = passingStudents;
