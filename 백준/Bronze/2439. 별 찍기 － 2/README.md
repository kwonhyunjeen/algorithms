# [Bronze IV] 별 찍기 - 2 - 2439 

[문제 링크](https://www.acmicpc.net/problem/2439) 

### 성능 요약

메모리: 9532 KB, 시간: 104 ms

### 분류

구현

### 제출 일자

2025년 4월 3일 17:26:22

### 문제 설명

<p>첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제</p>

<p>하지만, 오른쪽을 기준으로 정렬한 별(예제 참고)을 출력하시오.</p>

### 입력 

 <p>첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.</p>

### 출력 

 <p>첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.</p>

### ${{\textsf{\color{blue}메모}}}$

`repeat` 메서드를 사용했다. `repeat` 메서드: 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환한다. 
```js
const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim();

const number = Number(input);

for (let i = 1; i <= number; i++) {
    console.log(' '.repeat(number - i) + '*'.repeat(i));
}
```

위 방법 말고 `for`문을 여러번 돌리거나 `join`쓰는 방법 방법도 있긴하다.
```js
// for문 여러번 돌리는 방법
for (let i = 1; i <= number; i++) {
    let space = '';
    let stars = '';

    for (j = 0; j < number - i; j++) {
        space += ' ';
    }

    for (j = 0; j < i; j++) {
        stars += '*';
    }

    console.log(space + stars);
}
```

```js
// join 쓰는 방법
for (let i = 1; i <= N; i++) {
  let spaces = new Array(N - i).fill(' ').join('');
  let stars = new Array(i).fill('*').join('');
  console.log(spaces + stars);
}
```
