## Booleans

Booleans can only have two values: `true` or `false`.

```js
> true;
true

> false;
false
```

### Relational Operators

In addition to arithmetic operators there are relational operators in JavaScript.
Relational operators compare the value of two numbers and return a boolean:

- `>` (greater than)
- `<` (less than)
- `>=` (greater than or equal)
- `<=` (less than or equal)

```js
> 5 > 3
true
> 5 < 3
false
> 5 >= 3
true
> 5 <= 3
false

> 5 < 5
false
> 5 > 5
false
> 5 <= 5
true
> 5 <= 5
true
```

### Comparison Operators

Comparison operators compare the value of any two data types.

- `===` (identity)
- `!==` (non-identity)

The identity operator returns the boolean `true` if the two operands are equal.

```js
> 3 === 3
true
> "Happy" === "Happy"
true
> "HAPPY" === "happy"
false
> true === false
false
> 3 === "3"
false
```

The non-identity operator returns the boolean `true` if the two operands are not equal.

```js
> 3 !== ‘3’
true
> "Greg" !== "Bob"
true
> true !== false
true
> 3 !== 3
false
```

### Falsey vs Truthy

In JavaScript, every data type can be interpreted as a boolean value. We refer to
this as the truthiness or falsiness of piece of data. These are the values that
are considered falsey:

* `undefined`
* `null`
* `0`
* `NaN`
* `""` (empty string)

Everything else is considered truthy.

### Logical Operators

Boolean values are typically used with logical operators. Logical operators modify
the value of boolean expressions and always return a boolean value.

 - `&&` - logical and
 - `||` - logical or
 - `!` - logical not

#### `expr1` && `expr2`

Logical and (`&&`) evaluates to a truthy value if both operands (`expr1` and `expr2`)
are truthy, otherwise it returns a falsey value.

```js
> true && true
true

> true && false
false

> false && true
false

> false && false
false

> true && 1
1

> 1 && "Sunny"
"Sunny"

> true && 0
0
```

**NB:** If truthy, the return value is the 2nd operand. If falsey, the return value
is the first falsey operand it finds (starting with the left-hand side).

#### `expr1` || `expr2`

Logical or (`||`) returns truthy if either operands (`expr1` or `expr2`) is truthy.
If both are falsey then it returns falsey.

```js
> true || true
true

> true || false
true

> false || true
true

> false || false
false

> 10 || undefined
10

> undefined || ""
""

> "Sunny" || 10
"Sunny"
```

**NB:** If falsey, the return value is the 2nd operand. If truthy, the return value
is the first truthy operand it finds (starting with the left-hand side).

#### `!expr`

Logical not returns `false` if `expr` is truthy and `true` if `expr` is falsey.

```js
> var x = true;

> !x
false

> var y = false;

> !y
true

> var truthy = 10;

> !truthy
false

> var falsey = 0;

> !falsey
true

> !!falsey
false
```

Here are a few more complex examples:

```js
> true && (false || true)
true

> (5 > 0) || (5 < 0)
true

> (5 === 5) && (5 === "5")
false

> (undefined || 0) || (!10)
```

Booleans became very useful when we want to create branching logic in our programs,
which we will learn about soon.
