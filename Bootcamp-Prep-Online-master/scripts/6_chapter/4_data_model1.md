For the second problem, we've upped the ante. Scroll down and look at the `students2` array. You'll notice that we've added another key-value pair to each of the student objects: an `id`.

Let's look at the accompanying the problem.

```js
//Write a function that will print the name and id of all the students
//Example
// printStudents(students2)
// Anthony is student #0
// Winnie is student #1
// Pawandeep is student #2
```

This function, `printStudents`, should take in an array of student objects and print each one along with their id number. We can start by printing out their names like we did in the last problem:

```js
function printStudents(students) {
    for(var i = 0; i < students.length; i += 1) {
      var student = students[i];

      console.log(student.name);
    }
}
```

But instead of printing the name, we want to print the student's name followed by a hash mark (`#`) and the student's id. To accomplish this, we will use string concatenation:

```js
function printStudents(students) {
    for(var i = 0; i < students.length; i += 1) {
      var student = students[i];

      console.log(student.name + "#" + student.id);
    }
}
```

Are we done? No! We must test our code. Uncomment the test case and run your program. Is the answer correct? No! If your code looks like the function above, your output also looks like this:

```js
Anthony#0
Winnie#1
Pawandeep#2
```

This output does not exactly match the output of the example. It is not right There should be a phrase `"is student"` and a space between the name and the `#` mark. Once we correct that, then we'll be done:

```js
function printStudents(students) {
    for(var i = 0; i < students.length; i += 1) {
      var student = students[i];

      console.log(student.name + " is student #" + student.id);
    }
}
```

Test your program again to double check.
