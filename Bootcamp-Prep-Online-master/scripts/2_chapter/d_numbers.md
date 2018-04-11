## Numbers

One of most common primitive data types we'll be working with are numbers. For example:

```js
5
-1.25
100
-500
5000.05
```

are all considered numbers in JavaScript.

In case you're coming from other programming languages, one thing to note is that JavaScript has no distinction between integer and floating-point values.

If you’re unfamiliar with those terms, an *integer* is any whole number, positive or negative, including `0`. A *floating-point* is any whole number with a decimal value. For example, `5`, `100` and `-500` are integers, `0.00`, `-1.25` and `5000.05` are floating-points.

But in JavaScript the distinction doesn't exist. Internally, JavaScript represents all numbers in the same way.

#### Arithmetic Operators
We can use the standard arithmetic operators when working with numbers.

They include:
- `+`
- `-`
- `*`
- `/`
- `%` (modulus)

Open up Terminal/Command Prompt and try them out in the Node REPL:

```js
> 5 + 10
15

> 5 - 10
-5

> 5 * 10
50

> 5 / 10
0.5

> 5 % 10
5
```

All of these operators probably look familiar except for one. The modulus operator (`%`) returns the remainder of the division. Here's an example:

```
5 / 10 = 0 R 5
thus 5 % 10 = 5

55 / 10 = 5 R 5
thus 55 % 10 = 5
```

**NB**: Working with modulus can be a little tricky in JavaScript. Click [here](../notes/modulus.md) for more examples.

#### `NaN`
Additionally, there is a special number value in JavaScript called `NaN`. It stands for Not-A-Number. It’s the result of performing illegal mathematical operations. Try it out.

```js
> 20 * “Hello world!”;
NaN

> NaN + 5;
NaN
```

In addition, any mathematical operation using `NaN` will also result in `NaN`.
```js
> 5 + NaN
NaN

> NaN % 2
NaN
```
