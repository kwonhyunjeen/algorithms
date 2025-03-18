const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim();

const A = parseInt(input);

console.log(A - 543);
