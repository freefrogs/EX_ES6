'use strict';

// task 1
var x = 'Hello';
var y = 'World';
var sum = x + ' ' + y;
console.log(sum);

// task 2
var multiply = function multiply() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return console.log(a * b);
};
multiply(2, 5);
multiply(6, 6);
multiply(5);

// task 3
var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return console.log(args.reduce(function (a, b) {
    return a + b;
  }, 0) / args.length);
};
average(1, 2, 3, 4, 5, 6, 7);

// task 4
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average.apply(undefined, grades);

// task 5
var data = [1, 4, 'Iwona', false, 'Nowak'];
var firstname = data[2],
    lastname = data[4];

console.log(firstname + ' ' + lastname);
