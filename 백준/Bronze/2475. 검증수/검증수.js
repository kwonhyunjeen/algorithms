const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const result = input.reduce((acc, num) => acc + num * num, 0);

console.log(result % 10);
