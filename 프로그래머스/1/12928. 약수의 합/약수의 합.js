function solution(n) {
    const answer = [];
    // 약수 구하기: n을 1부터 n까지 나누었을 때 나머지가 0
    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            answer.push(i);
            if (i !== n / i ) {
                answer.push(n / i)
            }
        }
    }
    
    return answer.reduce((acc, index) => acc + index, 0);
}