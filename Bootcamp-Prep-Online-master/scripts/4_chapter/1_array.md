## Arrays

What do we do when we want to group together related data? For example, all of the single character strings that make up the alphabet. From what we've learned so far, we would define a variable for each letter and assign it to the appropriate character. Like so:

```js
var a = "a";
var b = "b";
var c = "c";
var d = "d";
var e = "e";
// and so on...
```

This becomes tiring and unmanageable quickly. Instead, let's use an array. An **Array** is a data structure that stores related data together in a list-like object. Each piece of data is stored as an *element* in the array in sequential order. An element can be of any data-type: numbers, strings, `undefined`, other arrays, etc. An array is defined by a pair of square brackets `[]` and its elements are separated by commas, `,`.

Let's rewrite the alphabet using one variable and an array:
```js
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
```

which we can also rewrite to improve its readability like so:
```js
var alphabet = [
  "a", "b", "c", "d", "e",
  "f", "g", "h", "i", "j",
  "k", "l", "m", "n", "o",  
  "p", "q", "r", "s", "t",
  "u", "v", "w", "x", "y",
  "z"
];
```

With arrays, we can:
+ add elements into an array
+ access elements
+ replace elements
+ and remove elements from the array.

~SCREENCAST START~

### Accessing Elements
Elements are accessed in by their *index* in the array. An **index** is a number that represents a position in the array. Following the programming convention, array indices start at 0. Thus the first element of an array is stored at index 0, the second element at index 1, the third element at index 2 and so on. If we want to access the first element, we *index* into the array using square brackets, `[]`. Between the square brackets, we write the index we want to access. Indexing at a non-existent index (e.g. -1 or a number greater than the size of an array) returns `undefined`.

For example:
```js
> alphabet[0];
"a"
> alphabet[1];
"b"
> alphabet[2];
"c"
> alphabet[25];
"z"
​> alphabet[-1];
​undefined
​> alphabet[26];
​undefined
```

### `Array.prototype.length` (property)
`Array.prototype.length` is a property which returns the length or the size of an array. Because it is a property and not a method, we don't have to call it like we do with methods, that is, we don't need to have parentheses after it.

**NB:** The length of any array will always be one more than index of the last element. Because of this, `Array.prototype.length` is commonly used to access the last element of an array.

```js
// initializing the array
var ary = [0, 1, 2];
// returning the length
ary.length; // => 3
// accessing the last element
ary[ary.length - 1]; // => 2
```

### Replacing Elements
In addition to accessing elements, we can also replace elements by reassigning values stored at array indices.

```js
// accessing the first element
ary[0]; // => 1
// replacing the first element
ary[0] = "one";
// accessing the first element returns the new value
ary[0]; // => "one"
```

Arrays allow us to package related together in one data structure. By indexing into an array, we can access any piece of data stored in the array. The Array is extremely useful and a great tool for managing complexity.

~SCREENCAST END~
