## Iterating Through An Object

### **`for (var key in object)`**

This is a useful object method for looping through the keys and values of an object. For example:

```js
var obj = {name: "Mihir", age: "twenty-something"};

for (var key in obj) {
  console.log(key);
}

"name"
"age"
```

This example prints all the keys found in `obj` to the screen. If we want to access the values, we would index into the `obj` using the `key`.

```js
for (var key in obj) {
  var value = obj[key];
  console.log(value);
}

"Mihir"
"twenty-something"
```

Why can't we use dot notation? For example, what would `obj.key` return?
