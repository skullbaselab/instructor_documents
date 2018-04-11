## Original Code

```js
function howHigh(height) {
  return (height + " feet high!");
}

function jump(height) {
  return "I'm jumping " + howhigh(height);
}

jump(5) //=> "I'm jumping 5 feet high!";
jump(12) //=> "I'm jumping 12 feet high!";
```

## Debugged Code

```js
function howHigh(height) {
  return (height + " feet high!");
}

function jump(height) {
  return "I'm jumping " + howHigh(height);
}

jump(5) //=> "I'm jumping 5 feet high!";
jump(12) //=> "I'm jumping 12 feet high!";
```
