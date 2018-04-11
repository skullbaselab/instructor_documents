## Date

The Date object is another built-in JavaScript object. It is used to work with dates and times.

Date objects are created with `new Date()`. If no arguments are provided, the constructor creates a JavaScript Date object for the current date and time. Try it.

```js
var today = new Date();
```

If you want to create an instance of the Date object for a specific date and time, there are three different ways to call the Date constructor with arguments.
1. `new Date(value);`
2. `new Date(dateString);`
3. `new Date(year, month, day, hour, minutes, seconds, milliseconds);`

For example,

1.
```js
var birthday = new Date('December 17, 1995 03:24:00');
```
2.
```js
var birthday = new Date('1995-12-17T03:24:00');
```
3.
```js
var birthday = new Date(1995, 11);
var birthday = new Date(1995, 11, 17, 3, 24, 0);
```
NB: `day`, `hour`, `minutes`, `seconds`, `milliseconds` are optional arguments.

### Useful Methods
#### Getters
+ `Date.prototype.getDay()` - returns the day of the week (from 0 - 6)
+ `Date.prototype.getDate()` - returns the day of the month (from 1 - 31)
+ `Date.prototype.getMonth()` - returns the month (from 0 - 11)
+ `Date.prototype.getFullYear()` - returns the year
+ `Date.prototype.getHours()` - returns the hour (from 0 - 23)
+ `Date.prototype.getMinutes()` - returns the minutes (from 0 - 59)
+ `Date.prototype.getSeconds()` - returns the seconds (from 0 - 59)
+ `Date.prototype.getMilliseconds()` - returns the milliseconds (from 0 - 999)

#### Setters
+ `Date.prototype.setDate()` - sets the day of the month of a date object
+ `Date.prototype.setFullYear()` - sets the year of a date object
+ `Date.prototype.setHours()` - sets the hour of a date object
+ `Date.prototype.setMilliseconds()` - sets the milliseconds of a date object
+ `Date.prototype.setMinutes()`	- sets the minutes of a date object
+ `Date.prototype.setMonth()` - sets the month of a date object
+ `Date.prototype.setSeconds()` - sets the seconds of a date object
