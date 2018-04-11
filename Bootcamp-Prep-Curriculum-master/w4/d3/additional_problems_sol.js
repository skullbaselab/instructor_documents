////////////////////////////////////////////////////////////////////////////////
// Write a function `arrayBuilder` that takes in a count object and returns
// an array filled with the appropriate numbers of elements. The order of
// the elements in the array does not matter, but repeated elements should be
// grouped.
//
// Examples:
// arrayBuilder({'a': 3, 'b': 0, 'c': 2}); //=> [ 'a', 'a', 'a', 'c', 'c' ]
// arrayBuilder({'cats': 2, 'dogs': 1}); //=> ['cats', 'cats', 'dogs']
// arrayBuilder({}); //=> []
////////////////////////////////////////////////////////////////////////////////

function arrayBuilder(count) {
  var array = [];

  for (var k in count) {
    for (var i = 0; i < count[k]; i++) {
      array.push(k);
    }
  }

  return array;
}


////////////////////////////////////////////////////////////////////////////////
// Write a function `objectTo2DArray` that takes in a object and returns an array
// that contains subarrays of length 2. Each subarray should contain a key and it's
// corresponding value from the object.
//
// Examples:
//
// var array = objectTo2DArray({'app': 'academy', 'age': 5});
// array; //=> [[ 'app', 'academy' ], [ 'age', 5 ]]
////////////////////////////////////////////////////////////////////////////////

function objectTo2DArray(obj) {
  var array = [];

  for (var k in obj) {
    var pair = [k, obj[k]];
    array.push(pair);
  }

  return array;
}

////////////////////////////////////////////////////////////////////////////////
// Write a function highestScore(students) that takes in an array of student objects
// as a parameter. It should return a string that corresponds to the student with
// the highest score. The string should contain that student's initials
// concatenated with their id. Assume the array contains at least 1 student object and
// the student with the highest score is unique (there are no ties).
//
// Example:
// var students = [
//  {name: 'Alvin Zablan', id: 128, score: -42},
//  {name: 'Eliot Bradshaw', id: 32, score: 57},
//  {name: 'Tommy Duek', id: 2, score: 99},
//  {name: 'Fred Sladkey', id: 256, score: 94}
// ];
//
// highestScore(students) //=> 'TD2'
////////////////////////////////////////////////////////////////////////////////


function highestScore(students) {
  var maxStudent = students[0];

  students.forEach(function(student) {
    if (student.score > maxStudent.score) {
      maxStudent = student;
    }
  });

  var name = maxStudent.name.split(" ");
  var fname = name[0];
  var lname = name[1];
  return fname[0] + lname[0] + maxStudent.id;
}

////////////////////////////////////////////////////////////////////////////////
// Write a function countRepeats(string) that takes in a string and returns the
// number of letters that appear more than once in the string. You may assume
// the string contains only lowercase letters. Count the number of letters that
// repeat, not the number of times they repeat in the string.
//
// Examples:
//
// countRepeats('alvin'); //=> 0
// countRepeats('aaaalvin'); //=> 1
// countRepeats('pops'); //=> 1
// countRepeats('mississippi'); //=> 3
// countRepeats('hellobootcampprep'); //=> 4
////////////////////////////////////////////////////////////////////////////////

function charCount(str) {
  var count = {};

  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (count[char] === undefined) {
      count[char] = 1;
    } else {
      count[char]++;
    }
  }

  return count;
}

function countRepeats(string) {
  var count = charCount(string);
  var numRepeats = 0;

  for (var char in count) {
    if (count[char] > 1) {
      numRepeats++;
    }
  }

  return numRepeats;
}

////////////////////////////////////////////////////////////////////////////////
// Write a function `totalAttendance` that takes in a roster (array) and absences (object)
// as parameters. The absences object contains days as its keys. The corresponding
// value for each key is an array containing students that were absent for that day.
// The function should return an object where keys correspond to students and
// the values correspond to their total attendance.
//
// Example:
// var roster = ['Alvin', 'Phi', 'Tommy', 'Fred'];
// var absences = {
//   'w1d1': ['Alvin', 'Fred'],
//   'w1d2': [],
//   'w1d3': ['Alvin', 'Tommy'],
//   'w1d4': ['Fred'],
//   'w1d5': ['Alvin']
// };
//
// totalAttendance(roster, absences); //=> {Alvin: 2, Phi: 5, Tommy: 4, Fred: 3}
////////////////////////////////////////////////////////////////////////////////

function totalAttendance(roster, absences) {
  var attended = {};
  var numDays = Object.keys(absences).length;

  for (var i = 0; i < roster.length; i++) {
    var student = roster[i];
    attended[student] = numDays;
  }

  for (var day in absences) {
    var absentStudents = absences[day];
    for (var i = 0; i < absentStudents.length; i++) {
      var abStudent = absentStudents[i];
      attended[abStudent]--;
    }
  }

  return attended;
}
