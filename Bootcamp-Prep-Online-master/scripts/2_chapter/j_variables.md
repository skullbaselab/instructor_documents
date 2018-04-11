## Variables

Variables are used to store information to be referenced and manipulated in a computer program. They also provide a way of labeling data with a descriptive name, so our programs can be understood more clearly by the reader and ourselves. It is helpful to think of variables as containers that hold information. Their sole purpose is to label and store data in computer memory. This data can then be used and even changed throughout your program.

### Variable Declaration
In order to use a variable, we must declare it. Variable **declaration** is the act of introducing the variable to the environment. To declare a variable, use the `var` keyword, followed by a space and then the name of the variable.

```javascript
var myVar;
```

If we try to evaluate a variable that we haven’t declared, we’ll get a Reference Error, so be sure that you are declaring all of your variables before using them. It is important to note that that the default value of all variables that have yet to be assigned is `undefined`.

```js
> myVar
undefined
```

### Variable Assignment
The act of binding a variable to a value is called **assignment**. Using the equal sign, often called the 'assignment operator', we bind the variable name on the left side to the value on the right side.

```javascript
var myVar2;
myVar2 = 10;
```

You’ll notice that you can assign undeclared variables (i.e. new variables introduced without the `var` keyword) to a value without getting a Reference Error. This is bad practice and should be avoided. We’ll talk about why when we start talking about scope, but for now, just trust us. Always declare your variables!

In the above example, I first declared the variable `myVar2`, and then assigned it to the value of `10`. There is a special kind of assignment called *initialization*. To initialize a variable, simply bind it to a value when you declare it. Say, for instance, that we wanted a new variable start out as the number `5`:

```javascript
var myVar3 = 5;
```

<!-- One important thing to note, JavaScript is loosely typed or a dynamic language, meaning we don’t have to declare the type of a variable ahead of time. Its data type gets determined as the program is being run. -->
