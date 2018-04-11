## `undefined`

Undefined is the default value of all variables. If you haven't assigned a value to
a variable, it is `undefined`. Let's see what I'm talking about:

```js
> var x;

> x;
undefined

> x === undefined;
true

> x = 5;
5

> x === undefined;
false
```

We'll revisit this when we talk about variables.

## `null`

The `null` value is the explicit value of nothingness. When we want to explicitly
set a value to be nothing, we use `null`.

You may be asking what the difference is between `undefined` and `null`.
`undefined` is more implicit, while `null` is more explicit. But in 90% of cases,
the two are interchangeable.
