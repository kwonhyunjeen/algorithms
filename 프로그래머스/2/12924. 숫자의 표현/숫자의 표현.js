function solution(n) {
    let count = 0;
    
    for (let i = 1; i * i <=n; i++) {
        if (n % i === 0) {
            // 약수가 홀수인 것
            if (i % 2 === 1) count++;
            
            // 약수는 쌍으로 존재함. i를 찾으면 n/i도 자동으로 약수
            if (i !== n / i && (n / i) % 2 === 1 ) {
                count++;
            }
        }
    }
    
    return count;
}