const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [hour, minute] = input[0].split(' ').map(Number);
const cookingTime = Number(input[1]);

let totalMinute = hour * 60 + minute + cookingTime;
let newHour = Math.floor(totalMinute / 60) % 24;
let newMinute = totalMinute % 60;

console.log(newHour, newMinute);
