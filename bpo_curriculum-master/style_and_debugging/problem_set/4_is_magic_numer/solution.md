## Original Code

```js
var magicify = function(number) {
  console.log(number - 34);
}

var isMagicNumer = function(number) {
  var magicNumb = magicify(number);

  if (magicNumb % 13 === 0 || magicNumb < 0) {
    return true;
  }

  return false;
}

isMagicNumer(26) //=> true;
isMagicNumer(50) //=> false;
```

## Debugged Code

```js
var magicify = function(number) {
  return number - 34;
}

var isMagicNumer = function(number) {
  var magicNumb = magicify(number);

  if (magicNumb % 13 === 0 || magicNumb < 0) {
    return true;
  }

  return false;
}

isMagicNumer(26); //=> true
isMagicNumer(50); //=> false
```
