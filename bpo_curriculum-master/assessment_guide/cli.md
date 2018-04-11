## Command Line Interface (CLI)

<iframe src="https://player.vimeo.com/video/163451195" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

</br>
### Terminal / Command Prompt

We will run code on assessments using the command line interface. As you go on in your
programming career, you will spend most of your time using the CLI to code. As such, being able to effectively use the command line will be an essential skill. Both the Terminal and Command Prompt are called command line interfaces (CLIs). Macs use the Terminal and PCs use the Command Prompt. Open up your CLI.

Mac's Terminal

```
~ $
```

PC's Command Prompt

```
C:\>
```
Your CLI may or may not look exactly like this. Since I'm working on a mac, you'll see me navigate to the Terminal using Mac-specific commands. If you are working on a PC, follow along with the corresponding PC specific commands below. Everything before the `$` (for Macs) is the current directory. CLIs typically start at the root directory. After the prompt symbol, you can type in commands.

Commands typically operate in the current directory. For example, the ls command for Macs/dir command for Windows list all the files in the current directory. The output of this command will be different depending on which directory you are in. Learning how to navigate between directories is a vital for using your CLI effectively.

#### MAC Commands

* ls - lists all the files in the current directory
* pwd - returns the present working directory
* cd [path] - changes the current directory to the directory specified by the path argument

</br>
#### PC Commands

* dir - lists all the files in the current directory
* cd - returns the present working directory
* cd [path] - changes the current directory to the directory specified by the path argument
So if I want to navigate from my root directory to my desktop using a Mac:

</br>

## Node REPL vs JS File

Both the Node REPL and using a file are common ways to run JavaScript code, but
they are useful in different scenarios:

**Node REPL** (read, evaluate, print, loop) is used for testing quick ideas and
one-liners. It is very useful when playing around with any curiosities you have
because you can see how expressions are evaluated as you type them. Any code that
you type into the Node REPL will be lost when you exit it. You can use the Node
REPL during to play around one-liners because it gives us immediate feedback
one what that expression evaluates to. The Node REPL behaves the same as the
black window you use on repl.it!

**JS Files** are used for saving code for the long term. If you save code to a
`.js` file, you can always read it later, make edits, etc.. This is similar to
how we write code in the white line-numbered window on repl.it!

### Using the Node REPL

To use the **Node REPL**, simply open up your command line (Terminal on Mac, Command
Prompt on Windows) and enter the command `node`. In the examples below we use
`$` to show that we are in the command line.

```
$ node
>
```

Notice that as soon as we enter the `node` command, we get a little `>` on our screen.
This `>` means that we are inside the Node REPL, so we can type any valid JavaScript
lines and see what they evaluate to:

```
$ node
> 1 + 1
2
> var message = "Hello" + "world"
undefined
> message
'Helloworld'
>
```

One thing to notice is that when we enter our JS line, the REPL will print out what
it evaluates to. After it prints, it will wait for more JavaScript to be entered because we
see `>`.

Let's say we are done with the **Node REPL**, and want to go back to our plain
old command line. To exit, enter the line `.exit` in the REPL. Doing this will
get rid of the `>`, which means we are no longer in the REPL. When we are back
inside our command line we can enter those commands like `cd`, `ls`, `dir`, etc..

```
$ node
> 1 + 1
2
> "How do I get out of here" + "!?!?"
'How do I get out of here!?!?'
> .exit
$
```

### Using JavaScript Files

First create a `.js` file in Atom and make sure you have it saved somewhere accessible, like you `Desktop` folder.
To run a JavaScript file, make sure that you have a file saved that ends in `.js`, for example `myFile.js`.

To run a JS file you need to first go into the folder that contains it using `cd`
in your command line. Feel free to use `ls` to list your folders and see where
you have to go. Once you are inside of the correct folder, run `node <fileName>`,
for example `node myFile.js`. When you run enter these commands, be aware of the
capitalization. File names are case sensitive!

```
$ ls
Downloads
Desktop
Music
Videos

$ cd Desktop
$ ls
myFile.js
aTextDocument.doc
someMusic.mp3
$ node myFile.js
Hello world
$
```

Like you guessed, the `myFile.js` file from the example above simply has one line in
it `console.log("Hello World");`.

#### On Assessments

As you work through assessments, feel free to use the REPL or a JavaScript File
for any "scratch-work" code. In particular, the REPL is a great way to test quick
ideas as you think of them! We'll talk about how to take assessments next!
