Look at the example on line 8:

```js
//Write a function that will print the name of all the students
//Example
// printNames(students1)
// Anthony
// Winnie
// Pawandeep
```

This means that when we call the function `printNames` with the input of the array `students1`, we should see the three names `Anthony`, `Winnie`, and `Pawandeep` print to the screen. Our job, as indicated by line 16, is to write the body of this `printNames` function. In the example, notice that the **specific** array used called `student1`. In order to write this function, we have to look at the `students1` array and observe the structure of it's data.

Look at line 2 where `student1` has been declared. Is `students1` a primitive or composite data type? It's a composite data type, or structure: an array. It's an array of objects. Each object has the key `name`. Looking at this data, we can see that we'll want our function to go through the array and print the name that's in each object.

In order to look at all the elements in an array, I must iterate through the array with a loop!

```js
function printNames(students) {
    for(var i = 0; i < students.length; i += 1) {

    }
}
```

Now that I have my looping structure iterating through the array of students, I need to print the name of each student. I'll create a variable to grab each student, and `console.log` the name of the student. We can use either dot or bracket notation to extract the name.

```js
// dot notation version
function printNames(students) {
    for(var i = 0; i < students.length; i += 1) {
      var student = students[i];

      console.log(student.name);
    }
}

// bracket notation version
function printNames(students) {
    for(var i = 0; i < students.length; i += 1) {
      var student = students[i];

      console.log(student["name"]);
    }
}
```

Uncomment the test for this problem and see if you get the correct result!
