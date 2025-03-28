const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const num = Number(input[0]);

for (let i = 1; i <= num; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    console.log(a + b);
}
