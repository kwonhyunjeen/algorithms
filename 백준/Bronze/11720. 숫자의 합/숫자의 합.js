const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const numbers = input[1];

let sum = 0;

for (let i = 0; i < n; i++) {
    sum += Number(numbers[i]);
}

console.log(sum);
