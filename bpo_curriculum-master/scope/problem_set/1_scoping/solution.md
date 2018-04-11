## Solution

```js
var foo = 5;

function bar() {
  var foo = "Anthony";
  foo + " is home";
  return foo;
}

console.log(foo); // 5
console.log(bar()); // Anthony
console.log(foo); // 5
```
