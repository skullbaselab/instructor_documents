## Assessment Feedback

For Monday assessments, you must annotate your students' assessment code with comments.
Use a combination of inline and block comments when leaving feedback about their code.
Be sure to highlight what they do well ("Nice!", "Good job", etc..) as much as what
they did poorly. Comment especially on style and indentation and advise them to break any bad habits.
Mark your comments with your initials so your student can easily spot it.

When you give feedback point out any logical errors, syntax errors, etc.. You do not
have to explain the solution to them (that's what the videos are for!), but nudge them
in the right direction. If they reached a solution in a messy or roundabout way,
let them know. Some students will require more feedback than others.

Upload the annotated assessment to Piazza. Replying to their original submission
with a follow up discussion with the annotated assessment attached.

Here are two examples of real comments given to a Bootcamp Prep student:

```js
// Hey <name>, find my comments below marked with `-AZ`
/******************************************************************************
** Write a function royalWe(sentence) that returns a string where every word
**'I' is replaced with 'we', every word 'mine' is replaced with 'ours', every
** word 'my' is replaced with 'our', and every word 'me' is replaced with "us"
** Examples:
** royalWe("I want to go to the store") => "we want to go to the store"
** royalWe("This is my house and you will respect me") => "This is our house and you will respect us"
** royalWe("This is mine") => "This is ours"
** royalWe("Jump for my love") => "Jump for our love"
*/

function royalWe(sentence){
  var string = [];
  var words = sentence.split(" ");

  for(var i = 0 ; i < words.length ; i++){

    if(words[i] === "I"){
      words[i] = "we";  // this is good! You are replacing elements of the array. -AZ

      string.push(words); // no need to push anything into a new array -AZ
    } else if(words[i] === "my"){
      words[i] = "our";
      string.push(words); // this is pushing an entire array into another array -AZ
    } else if(words[i] === "mine"){
      words[i] = "ours";
      string.push(words);
    } else if(words[i] === "me"){
      words[i] = "us";
      string.push(words);
    }
   }

  // since the conditionals above actually replace elements of the words array,
  // you can simple return words.join(' ')
  // return words.join(' '); -AZ
  return string.join(" ");
}

// Very close! You pretty much had it. See my comments above and check out our solution
// videos. Your indentation is looking very sharp here. -AZ
```

```js
// Hey <name>, find my comments below marked with `-AZ`.
/******************************************************************************
** Write a function magicNumbers(max) that returns an array of numbers up to
** the max. Each number should be either divisible by 4 or 6, BUT NOT BOTH.
** Example:
** magicNumbers(20) => [4, 6, 8, 16, 18]
*/
function magicNumbers(max){
  // missing indentation inside this function -AZ
for(var i = 1 ; i <= max ; i++){ // exclude max with `i < max`, we get this info from the example -AZ
    if(i % 4 === 0){  // we need a way to avoid numbers divisible by both both -AZ
      console.log(i);
    } else if (i % 6 === 0){
      console.log(i);
    }
  }
}

// On the right track!
// We want this function to return an array, not just print out the numbers -AZ
//
// Although not a correct solution here is how to indent your code properly:
//
// function magicNumbers(max){
//   for(var i = 1 ; i <= max ; i++){
//     if(i % 4 === 0){
//       console.log(i);
//     } else if (i % 6 === 0){
//       console.log(i);
//     }
//   }
// }
// -AZ
```
