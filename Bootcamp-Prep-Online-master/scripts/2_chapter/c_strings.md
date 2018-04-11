## Strings

The first primitive data type we'll discuss are *strings*. A *string* is a series of
characters. For example, `"Hello world!"`, `"Anthony"`, `"123"` are all considered
strings.

Strings are denoted by quotation marks. You can use either single or double quotes.

```js
"Hello world!"

'Hello world!'
```

Both are valid strings in JavaScript.

### String Methods

Certain data types have methods built-in to them. Some common string methods
worth committing to memory include:

- `String.prototype.toLowerCase`
- `String.prototype.toUpperCase`
- `String.prototype.indexOf(searchValue)`
- `+`

Before we talk about what each of these methods do, I want to explain the
notation. The capital `String` indicates the data type. `prototype` indicates
that the method exists on **all** instances of `String`. In other words, every
string will have this method; we can call it on `"hello world"`, `"123"`, and `"true"`
because they are all instances of the data type `String`. The reason why
understanding this notation is important is because it's how methods are documented.
We'll learn how to look at the official documentation later.

Now let’s see what each of these do!

#### `String.prototype.toLowerCase` and `String.prototype.toUpperCase`

The `toLowerCase()` method converts a string to lowercase letters while the `toUpperCase()` method converts a string to uppercase letters. Let's see this in action.

```js
> var str = "Hello world!"
'Hello world!'

> str.toLowerCase()
'hello world!'

> str.toUpperCase()
'HELLO WORLD!'
```

#### `String.prototype.indexOf(searchValue)`

The `indexOf()` method returns the index of the first occurrence of the specified `searchValue` in the string or `-1` if the value is not found.

An *index* is the position of a character in a string. It is specified by a number.
Something really important to note about indexing is that we start counting at 0,
not 1. Thus, the index of the first character of any string is 0, the second character
has an index of 1, and so on. The index of the last character of any string is
its length minus 1.

For example if the string is "sunny", the index of each character is as follows:

Character | Index
:---:|:---:
`"s"`| 0
`"u"`| 1
`"n"`| 2
`"n"`| 3
`"y"`| 4

Let's see some examples of `indexOf` below:

```js
> var str = "hey whats up hello"
'hey whats up hello'

> str.indexOf("h")
0

> str.indexOf("e")
1

> str.indexOf("o")
17

> str.indexOf("hey")
0

> str.indexOf("hello")
13
```

Though there are two occurrences of `"he"` in the string, `indexOf` returns the
index of the first occurrence.

```js
> str.indexOf("he")
0
```

It also important to note that JavaScript is case sensitive. Therefore, a lowercase
`"a"` is not equal to an uppercase `"A"`. `"hello"` and `"Hello"` are not the same
thing. While the string `"hello"` exists in the string, the string `"Hello"` does not.

```js
> str.indexOf("Hello")
-1
```

As we mentioned before, `indexOf` returns `-1` if the `searchValue` does not
exists in the string.

#### `+`

Lastly, `+` concatenates together two strings. *Concatenation* is the process of
joining strings together.

```js
> "hello" + "hi"
"hellohi"

> "hello " + "hi"
"hello hi"
```

And in the case of a string and number, JavaScript converts the number to a string
and concatenation of the two strings behaves as expected.

```js
> "hello" + 3
"hello3"

> 3 + "hello"
"3hello"
```
