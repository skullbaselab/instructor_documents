## Solution

```js
var bar = 5;
console.log("1: " + bar); // 1: 5

function foo() {
  var bar = 10;
  console.log("3: " + bar); // 3: 10

  var innerFoo = function() {
    bar = 15;
  }

  console.log("4: " + bar); // 4: 10
}

console.log("2: " + bar); // 2: 5
foo();
console.log("5: " + bar); // 5: 5
```
