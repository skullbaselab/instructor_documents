## Multi-Dimensional Arrays

When Arrays were introduced, we said that an element can be of any data-type which includes arrays. **A multi-dimensional array is an array with arrays as its elements**. As before, each array is defined by a pair of square brackets, `[]`, and its elements are separated by commas, `,`.

Let's initialize our first multi-dimensional array:
```js
var multiAry = [
  [0, 1], [2], [3], [4, 5]
];
```

~SCREENCAST START~
## Accessing Elements
As with one dimensional arrays, we access elements by indexing into multi-dimensional array.

```js
> multiAry[0];
[0, 1]
> multiAry[1];
[2]
> multiAry[multiAry.length - 1];
[4, 5]
```

Each element that is returned is an array. We can access their elements by indexing into these *inner* arrays.

```js
> var firstInnerArray = multiAry[0];
[0, 1]
> firstInnerArray[0];
0
> firstInnerArray[firstInnerArray.length - 1];
1
```

This example shows that indexing into a multi-dimensional array evaluates to an array. We declared a variable and assigned it to this inner array. However, we can also directly index into inner arrays without first assigning it to a variable:

```js
> multiAry[0][0];
0
> multiAry[0][1];
1
> multiAry[multiAry.length - 1][0];
4
> multiAry[multiAry.length - 1][1];
5
```
~SCREENCAST END~
