## Solution

```js
var bar = "dance";

function foo() {
  bar = 10;

  var innerFoo = function() {
    var bar = 15;
  }

  console.log("2: " + bar); // 2: 10
  innerFoo();
  console.log("3: " + bar); // 3: 10
}

console.log("1: " + bar); // 1: dance
foo();
console.log("4: " + bar); // 4: 10
```
