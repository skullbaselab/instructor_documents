## Bootcamp Prep Online Assessment Feedback

As a Bootcamp Prep Online Teaching Assistant, one of your primary responsibilities
is to give feedback for student's assessment submissions in the form of comments.
Assessment annotations are essential because they are the main way online students
will receive personal attention on their work! These students do not have the
luxury of having an instructor over their shoulder as they work through the course,
assessment feedback is where they can interact with an instructor.

Highlight what they do well ("Nice style!", "Good job", "Nice helper function", etc.)
as much as what they did poorly. Comment especially on style and indentation; advise them to
break any bad habits. It is important to urge them to focus on style early on,
otherwise they will develop poor habits and we'll be stuck reading their poor code
for the rest of the course.

#### Comment Guidelines

At the top of the first problem file you should leave a comment indicating how
many specs were passed. Also leave a comment on how they can spot your feedback
with your initials. After looking over all of their work. Leave a few overall
thoughts on their work. Here's an example of what this may look like.

```js
// 6/7 specs passed
// Find my comments marked with `-AZ`
//
// Great work on this assessment. Code style is looking sharp overall.
// However, don't forget those semicolons. Check out my comments
// for the hipsterfy problem in particular, super close!
```

Highlight what they do well ("Nice style!", "Good job", "Nice helper function", etc.)
as much as what they did poorly. Comment especially on style and indentation; advise them to
break any bad habits. It is important to urge them to focus on style early on,
otherwise they will develop poor habits and we'll be stuck reading their poor code
for the rest of the course.

When you give feedback, point out any logical errors, syntax errors, etc.. You do not
have to explain the entire solution to them (that's what the videos are for!), but
nudge them in the right direction. If they reached a solution in a messy or roundabout way,
let them know. Some students will require more feedback than others. Don't feel
obligated to wrack your brain thinking of something to nitpick if a student's code
is flawless. Let the strong students be. Focus on giving the weaker submissions
attention as your feedback can set them back on track.

Below are few examples from actual student submissions. You will also find entire
commented assessment [here][example-assessments]

```js
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
/******************************************************************************
** Write a function magicNumbers(max) that returns an array of numbers up to
** the max. Each number should be either divisible by 4 or 6, BUT NOT BOTH.
** Example:
** magicNumbers(20) => [4, 6, 8, 16, 18]
*/
function magicNumbers(max){
  // missing indentation inside this function -AZ
for(var i = 1 ; i <= max ; i++){ // exclude max with `i < max`, we get this info from the example -AZ
    if(i % 4 === 0){  // we need a way to avoid numbers divisible by both -AZ
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

[example-assessments]: ./example_commented_assessments
