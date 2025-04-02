const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.forEach((item) => {
    const [a, b] = item.split(' ').map(Number);
    console.log(a + b);
});
