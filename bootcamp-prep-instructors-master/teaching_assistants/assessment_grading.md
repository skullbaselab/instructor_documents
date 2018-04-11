## Grading Bootcamp Prep Online Assessments

Students will upload their completed assessments to the platform.
Download and unzip their submission folder. If the student followed the directions,
they will have zipped up the entire folder with all files intact and you can
test it with no fuss.

### Assessment Structure

An assessment contains 3 folders (problems, test, utils).
When a students submits an assessment they should have left the file structure intact,
so it is ready to run. If you receive an incorrect submission, contact the student
to reupload.

problems - the files where students code, these are the only file that students should modify

test - the test cases, feel free to peek at these to see exactly what we are testing

utils - some extras to make grading as smooth as possible

You job to comment the student's files in `/problems`.

### Testing a Submission

To run the test cases on their submission, simply `cd` into the root folder and run `mocha`.
After getting the number of specs passed, leave a comment at the top of the first
problem file to indicate their score. See the example assessments.

Students will struggle with syntax, especially during the early assessments.
To make grading easy, we have set up the assessment to catch any runtime errors.
If there a student has syntax or reference errors in a problem file, they will not be awarded
any points for that problem. When testing an assessment with `mocha`, be sure to scroll
to the top of the output where you can quickly identify these runtime errors:

```
example_A5 Alvin$ mocha
problems/3_sum_2d_Array.js - ReferenceError

highestScore()
  ✓ should return a string representing the student with the highest score

snakeToCamel()
  1) should return a string, converted from snake_case to CamelCase

sum2DArray()
  2) should return the sum of all numbers in the 2D array
```

To get a more detailed error message, `cd` into the `/problems` folder and run the file with `node`:

```
example_A5 Alvin$ cd problems/
problems Alvin$ ls
1_highest_score.js	2_snake_to_camel.js	3_sum_2d_array.js	4_min_value_callback.js	5_my_select.js

problems Alvin$ node 3_sum_2d_array.js
/Users/Alvin/Downloads/example_A5/problems/3_sum_2d_array.js:38
module.exports = sum2DArray;
                 ^
ReferenceError: sum2DArray is not defined
```
