# Node I/O

Node has many built-in modules that do a wide variety of things, from getting user input to reading files. Today, we are going to learn how to read files and use their contents in our programs. But first, we have to learn how to import a module:

`var foo = require('nameOfModule');`

All of the functionality of the module will exist in the variable you put it in. In the case above, that would be foo.

The File System module will allow us to read the contents of a file. In order to import it, we use the name `"fs"`. The module has a method on in called readFile, which we can use to... well, read the lesson. Over the next few exercises we will learn how to use the File System module. This will culminate is us implementing a sentiment detector that can process any sentence and give is a sentiment score (+ for happy sentences, - for ad sentences).
