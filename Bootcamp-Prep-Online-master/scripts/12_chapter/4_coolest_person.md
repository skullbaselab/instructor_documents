~SCREENCAST START~
Download the file `data.txt`. Look inside and you'll see it looks like the following:

```js
// data.txt
john 5
anthony 7
carrie 10
bill 3
```

Each row contains the name of a person and their "coolness" rating. We want to write a function that can read this file and give us the name of the most cool person. Let's see how we can accomplish this with the File System module that we introduced in the last lesson. We will create this function one step at a time!

First, let's create a function that will give us all the records (rows) of a file and print them to the console:

```js
var fs = require("fs");

function getRecordsFromFile(filename) {
  fs.readFile(filename, function(err, data) {
    if (err) {
      console.log("---Error---");
      console.log(err);
      return;
    }

    console.log(data);
  });
}

getRecordsFromFile("data.txt");
```

First we need to require the `"fs"` module. Let's store it in a variable called `fs`. Let's then write a function that can take in the name of the file we want and log all of the data. **It's important that you type this code out yourself, instead of just looking at it.**

When we run this file, we'll see what the `data` looks like when it's logged to the screen. Make sure your JavaScript file is in the same directory as `data.txt`.

```
// the console
$ node myFile.js
<Buffer 6a 6f 68 6e 20 35 0a 61 6e 74 68 6f 6e 79 20 37 0a 63 61 72 72 69 65 20 31 30 0a 62 69 6c 6c 20 33 0a>
```
Oops! This isn't what we want at all.
~SCREENCAST END~
~SCREENCAST START~
It's probably best that we read the documentation to understand how this function works. Lucky for you, I've already done that and have left the explanation below:

`fs.readFile` can take in a variable number of arguments:

* The first argument is always the filename (and path if needed).
* The second argument can be either a callback or a string:
  * If we use a callback as the second argument, the function will read the data it byte form. Since all data types are represented as bytes under the hood, the function doesn't make any assumptions about what type of data it's reading. If we want to tell it to interpret these bytes as strings, we have to tell it to so.
  * When the second argument is a string, that indicates to the File System function how it should interpret the bytes. In order to get bytes read as strings, we tell it to interpret them as "utf8"
* If the second argument is a string, then we can pass in the callback as the third argument.
* Regardless of whether the callback was passed as the second or third argument, the readFile method will pass it:
  * err: an error object (if there was an error)
  * data: the file data (defaults to raw byte data or encoded as specified in the second argument).

With this knowledge, let's modify our above function:

```js
var fs = require("fs");

function getRecordsFromFile(filename) {
  fs.readFile(filename, 'utf8', function(err, data) {
    if (err) {
      console.log("---Error---");
      console.log(err);
      return;
    }

    console.log(data);
  })
}

getRecordsFromFile("data.txt");
```
Now when we run the file, we get:

```
// the console
$ node myFile.js
john 5
anthony 7
carrie 10
bill 3
```

Yay!

Now we just need to split this up on the newline character ("\n") and this function will be complete.


```js
var fs = require("fs");

function getRecordsFromFile(filename) {
  fs.readFile(filename, 'utf8', function(err, data) {
    if (err) {
      console.log("---Error---");
      console.log(err);
      return;
    }

    var records = data.split("\n");

    return records;
  })
}
```
~SCREENCAST END~
~SCREENCAST START~
Now I can use this function  `getRecordsFromFile` to get each line as its own string. From here, the problem is rather easy: Just see who has the highest number next to their name and return that name. I'll do that work in another function called `mostCoolFromFile` that takes in the name of the file as an argument. It passes that name to `getRecordsFromFile` to get back an array of records.

```js
function mostCoolFromFile(filename) {
  var records = getRecordsFromFile(filename);
  var coolest;
  var coolestRating = -1;

  records.forEach(function(record) {
    var name = record.split(" ")[0];
    var rating = parseInt(record.split(" ")[1]);

    if (rating > coolestRating) {
      coolest = name;
      coolestRating = rating;
    }
  });

  return coolest;
}

mostCoolFromFile("data.txt");
```

Now, based on the last lecture, some of you may have noticed the error with this. Let's see what happens when we run it:

```
// the console
$ node myFile.js
records.forEach(function(record) {
         ^
TypeError: Cannot read property 'forEach' of undefined...
```

Wait, what happened? `readFile` is an asynchronous function. That means that it will NOT wait for the file to be read. The JS interpreter will keep reading the file causing the `getRecordsFromFile` function to return `undefined`. In order to get around this, we'll need to use a callback. We'll pass a callback to `getRecordsFromFile` that will be called whenever the records have been made:

```js
var fs = require("fs");

function getRecordsFromFile(filename, cb) {
  fs.readFile(filename, 'utf8', function(err, data) {
    if (err) {
      console.log("---Error---");
      console.log(err);
      return;
    }

    var records = data.split("\n");

    cb(records);
  });
}

function mostCoolFromFile(filename) {
  getRecordsFromFile(filename, function(records) {
    var coolest;
    var coolestRating = -1;

    records.forEach(function(record) {
      var name = record.split(" ")[0];
      var rating = parseInt(record.split(" "))[1];

      if (rating > coolestRating) {
        coolest = name;
      }
    });

    return coolest;
  });
}

mostCoolFromFile("data.txt");
```

But now we still have a problem. How will we actually get the coolest person back? You guessed it: We'll add a callback to `mostCoolFromFile` argument list that will be called whenever the coolest whenever is found.

```js
var fs = require("fs");

function getRecordsFromFile(filename, cb) {
  fs.readFile(filename, 'utf8', function(err, data) {
    if (err) {
      console.log("---Error---");
      console.log(err);
      return;
    }

    var records = data.split("\n");

    cb(records);
  });
}

function mostCoolFromFile(filename, cb) {
  getRecordsFromFile(filename, function(records) {
    var coolest;
    var coolestRating = -1;

    records.forEach(function(record) {
      var name = record.split(" ")[0];
      var rating = parseInt(record.split(" ")[1]);

      if (rating > coolestRating) {
        coolest = name;
      }
    });

    cb(coolest);
  });
}

mostCoolFromFile("data.txt", function(coolestPerson) {
  console.log(coolestPerson);
});
```

Now run the code...
~SCREENCAST END~
