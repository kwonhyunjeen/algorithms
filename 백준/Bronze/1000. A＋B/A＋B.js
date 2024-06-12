function solution(a, b) {
    return a + b;
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const [a, b] = input.split(' ').map(Number);

const output = solution(a, b);
console.log(output);
