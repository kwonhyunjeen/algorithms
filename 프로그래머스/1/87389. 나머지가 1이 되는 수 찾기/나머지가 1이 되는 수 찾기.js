function solution(n) {
    // 조건을 만족하는 x를 찾으면 바로 종료
    for (let x = 2; x < n; x++) {
        if (n % x === 1) {
            return x
        }
    }
}