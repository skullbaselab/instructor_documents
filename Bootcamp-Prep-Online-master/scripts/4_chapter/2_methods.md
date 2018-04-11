#### Array Methods
Arrays come with a lot of useful methods which you should familiarize yourself with.

####  `Array.prototype.indexOf(element)`
returns the first index at which an argument `element` is found in the array, or -1 if it is not present in the array.

```js
> var ary = [1, 2, 12, 1];
undefined

> ary.indexOf(0);
-1

> ary.indexOf(2);
1

> ary.indexOf(1); // returns the first occurrence
0
```

####  `Array.prototype.unshift(element)`
adds one or more elements to the beginning of an array and returns the new length of the array.
```js
> var veggies = ["cabbage", "potato"];
undefined

> veggies.unshift("lettuce"); // calling unshift with one argument
3

> veggies;
["lettuce", "cabbage", "potato"]

> veggies.unshift("beet", "celery");
5

> veggies;
[ 'beet', 'celery', 'lettuce', 'cabbage', 'potato' ]
```

####  `Array.prototype.shift()`
removes the first element from an array and returns that element. This method changes the length of the array. If you call `shift()` on an empty array, it returns `undefined`.
```js
> var ary = [1, 2, 3];
undefined

> ary.shift();
1

> ary;
[2, 3]

> [].shift(); // calling shift on an empty array
undefined
```


####  `Array.prototype.push(element)`
adds one or more elements to the end of an array and returns the new length of the array.

```js
> var fruits = ['strawberry', 'apples'];
undefined

> fruits.push('banana'); // calling push with one argument
3

> fruits;
[ 'strawberry', 'apples', 'banana' ]

> fruits.push('mangoes', 'cherries'); // calling push with multiple arguments
5

> fruits;
[ 'strawberry', 'apples', 'banana', 'mangoes', 'cherries' ]
```

####  `Array.prototype.pop()`
removes the last element from an array and returns the element. Modifies the array it is called on. If you call `pop()` on an empty array, it returns `undefined`.

```js
> var ary = [1, 2, 3];
undefined

> ary.pop();
3

> ary;
[1, 2]

> [].pop(); // calling pop on an empty array
undefined
```


####  `Array.prototype.concat(array)`
returns an array of all of the elements from the array its called one and the argument `array`. In other words, it concats arrays together.

```js
var num1 = [1, 2, 3];
var num2 = [4, 5, 6];
var num3 = [7, 8, 9];

var nums = num1.concat(num2, num3);

console.log(nums); // => [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

####  `Array.prototype.slice(startIndex, endIndex)`
returns a copy of the array containing elements from `startIndex` to `endIndex - 1`. If not argument is specified for `endIndex`, it returns a copy of the array containing elements from `startIndex` to the end of the array. If no arguments are specified, it returns a copy of the entire array.

```js
> var ary = [10, 20, 30, 40];
undefined

> ary.slice(0, 3);
[10, 20, 30]

> ary.slice(2, 4);
[30, 40]

> ary.slice(2);
[30, 40]

> ary.slice(); // calling slice with no arguments
[10, 20, 30, 40]
```
####  `Array.prototype.join(separator)`
joins an array into a string where array elements are concatenated by the `separator` argument. If no argument is specified, array elements are joined by a comma. If an element is undefined or null, it is converted to an empty string. Like `join()` does not modify the array it's called on.

```js
> var ary = [ 'Hey,', 'whats', 'up?', 'Hello' ];
undefined

> var joinStr = splitStr.join(" ");
'Hey, whats up? Hello'

> joinStr;
'Hey, whats up? Hello'
```

### `String.prototype.split()` and `Array.prototype.join()`

The opposing method to `Array.prototype.join()` is `String.prototype.split(separator)`. This string method splits a string into an *array* of substrings on the `separator` argument and returns the new array containing the substrings. It does not modify the string it's called on.

```js
> var str = "Hey, whats up? Hello";
undefined

> var splitStr = str.split(" ");
[ 'Hey,', 'whats', 'up?', 'Hello' ]

> splitStr;
[ 'Hey,', 'whats', 'up?', 'Hello' ];

> str;
'Hey, whats up? Hello'
```
Here's another example:

```js
> var str = "cat in a hat";
undefined

> str.split("a");
[ 'c', 't in ', ' h', 't' ]

> str.split("at");
[ 'c', ' in a h', '' ]

> str;
'cat in a hat'
```

One notable side effect of `String#split()` and `Array#join()` is that when used in conjunction they are very useful for replacing characters or words in a string. Let's say I wanted to replace the word "Hey" with "Hi" in my string above. Or replace all e's with the letter o.

```js
> var replaceHey = str.split("Hey");
[ '', ', whats up? Hello' ]

> replaceHey.join("Hi"); // all the Hey's got replaced with Hi's!
'Hi, whats up? Hello'

> var replaceE = str.split("e");
[ 'H', 'y, whats up? H', 'llo' ]

> replaceE.join("o"); // all the e's got replaced with e's!
'Hoy, whats up? Hollo'
```
