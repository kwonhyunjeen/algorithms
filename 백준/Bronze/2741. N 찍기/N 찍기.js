const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim();

const num = Number(input);

for (let i = 1; i <= num; i++) {
    console.log(i);
}
