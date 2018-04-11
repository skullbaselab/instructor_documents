Let's write a small function together. The *specification* for this function is as
follows (in case you don't know what specification means, it is just a description
of how the function behaves):

```javascript
/* sayHi
** Input: name, a string
** Output: A string that's saying 'Hi' to the string specified by the parameter
**
** Examples
** sayHi("Anthony") => "Hi, Anthony!"
** sayHi("Winnie") => "Hi, Winnie!"
*/
```

From the specification, we know that we want to write a function called `sayHi`
and it will accept a parameter `name` which will be a string. Always look at the examples, because they will help us understand what the function is doing and guide our approach. More specifically, we want our function to return the same output for the same input as the examples.

Ok now let's outline the function:

```javascript
function sayHi (name) {

}
```

Notice my indentation. The end curly bracket of a function should always align
with the function it is closing. Now I'll start writing the body of the function:

```javascript
function sayHi (name) {
  return "Hi" + name;
}
```

From the specification, we know that we want our function to output a string which concatenates our argument with the string `"Hi"`. We use the `return` keyword because the concatenated string is what we want outputted when calling the function.

Every time we write a function, we must test it. At the bottom of my file, I'll
write a few test cases:

```javascript
function sayHi (name) {
  return "Hi," + name;
}

console.log(sayHi("Anthony"));
console.log(sayHi("Winnie"));
```

I'm wrapping the function call inside of a `console.log` because I want to print to answer to the screen so I can see it. When I run this file, it becomes clear that there's a bug. *Bugs* are what we call mistakes in programming. *Debugging* is the process of fixing them.

```
> node file.js
Hi,Anthony
Hi,Winnie
```

Let's check out our bug. So we can see that we are missing a space between the
`,` and the `name`. We are also missing an exclamation point at the end.
Let's fix the function:

```javascript
function sayHi (name) {
  return "Hi, " + name + "!";
}

console.log(sayHi("Anthony"));
console.log(sayHi("Winnie"));
```

Let's test it out again:
```
> node file.js
Hi, Anthony!
Hi, Winnie!
```

Yay! It works.
