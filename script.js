// task 1
const x = 'Hello';
const y = 'World';
const sum = `${x} ${y}`;
console.log(sum);

// task 2
const multiply = (a = 1, b = 1) => console.log(a*b);
multiply(2,5);
multiply(6,6);
multiply(5);

// task 3
const average = (...args) => console.log(args.reduce((a,b) => a + b, 0) / args.length);
average(1,2,3,4,5,6,7);

// task 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average(...grades);

// task 5
const data = [1, 4, 'Iwona', false, 'Nowak'];
const [ , , firstname, , lastname] = data;
console.log(`${firstname} ${lastname}`);