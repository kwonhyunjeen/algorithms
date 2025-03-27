const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim();

const number = Number(input);
let result = '';

for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= i; j++) {
        result += '*';
    }
    result += '\n';
}

console.log(result);
