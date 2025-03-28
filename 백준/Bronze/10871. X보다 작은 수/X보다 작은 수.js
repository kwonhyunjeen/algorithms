const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const x = Number(input[0].split(' ')[1]);
const a = input[1].split(' ').map(Number);

const result = a.filter((item) => item < x);

console.log(result.join(' '));
