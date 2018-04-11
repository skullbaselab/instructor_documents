<iframe src="https://player.vimeo.com/video/163451194?rel=0&autoplay=1" width="100%" height="400px" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" style="line-height: 1.6em;" rel="line-height: 1.6em;"></iframe>

## Your First Program: Hello World!

I think it's about time we start writing some code. For our first adventure into the world of programming, we'll be implementing a program called "Hello World".

The “Hello, World!” program is the quintessential first program that you write when learning a new programming language. It’s a program that prints the text “Hello, World!” to the screen and is typically very simple to write.

It is because of its simplicity that it is used to introduce a programming language, allowing the the student (you) to focus on the syntax and structure of the language, as opposed to any complex logic. The “Hello, World!” program in JavaScript is as follows:

`console.log(“Hello, World!”);`

Let’s break down what I wrote:

- I’m running a function called ‘log’ that exists inside of the ‘console’ object. An object is structure that holds related information, which we explain in depth later. For now, focus on the period between console and log. It indicates that log exists inside of the console object. log is a function that prints information to the screen.
- To run the function, I put parentheses behind the function name (log) and put what I wanted to print to the screen inside of the parentheses ("Hello World!").
- I’ve wrapped the Hello World text in quotation marks. This is necessary so the JavaScript engine reads it as a string, instead of a variable. If you don’t know what a variable is, we’ll get to that soon.
- Lastly, I ended my statement with a semicolon. This is like a period in JavaScript. Periods indicate the end of a sentence, or a thought in English. Semicolons indicate the end of a statement, or an instruction in JavaScript.
Now try printing your name to the screen!

There are two ways we can do this. I can write the program directly in the Node REPL or I can write a file.

1. Node REPL

We can run our program in the Node REPL. To do this, please open up the Terminal (if you have a Mac) or the Command Prompt (if you have a PC). Type node in the window that opens up and press Enter. This opens up the Node REPL, which remember, stands for Read, Evaluate, Print Loop. Everything that we type into the Terminal/Command Prompt now will be evaluated and executed by the JavaScript interpreter. We can write and run any valid JavaScript code inside of the REPL. It’s particularly useful for testing short snippets of your code or built-in functions.

Ok enough talk, let’s try it. Type console.log(“Hello, World!”); into the Node REPL and hit Enter. You should see the text Hello World printed to the screen. If you don’t check to make sure you typed everything correctly. Are you missing quotes? Or a semicolon? Try again.

2. JavaScript File

We can also run our program by running it through a file. JavaScript files are denoted by the file extension “js”. Let’s create our first JavaScript file. Open up Atom or whatever IDE you prefer. Create a new file (File > New File) and save it as “helloWorld.js” on your Desktop. To double check that it has work, a new icon should appear on your Desktop named “helloWord.js”. Now in your new file, type console.log(“Hello World!”);. Save your file.

To run your file, open up your Terminal/Command Prompt if it’s not already open. If you have Node open, close it by typing Control + C twice or ".exit" into the command line. Navigate to your Desktop (if you don’t know how to do this, check out this). Once there, type node helloWord.js into the command line. You should see the text Hello World printed to the screen.

Typing node <filename.js> runs the file specified after node. This means that the JavaScript interpreter will evaluate the code saved in the file. Running programs written and saved in files using Node is useful when you have to write long programs, edit them repeatedly, and save them in memory.

**Congratulations!** You’ve written and run your first program.

Now try printing your name to the screen!