const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim();

const number = Number(input);

for (let i = 1; i <= number; i++) {
    console.log(' '.repeat(number - i) + '*'.repeat(i));
}
