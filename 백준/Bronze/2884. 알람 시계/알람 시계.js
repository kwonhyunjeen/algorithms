const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').toString().trim().split(' ');

const H = parseInt(input[0]);
const M = parseInt(input[1]);

if (M < 45) {
    if (H === 0) {
        console.log(H + 23, 60 - 45 + M);
    } else {
        console.log(H - 1, 60 - 45 + M);
    }
} else {
    console.log(H, M - 45);
}
