function solution(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    
    let prev2 = 1;
    let prev1 = 2;
    
    for (let i = 3; i <= n; i++) {
        const current = (prev2 + prev1) % 1234567;
        prev2 = prev1;
        prev1 = current;
    }
    
    return prev1;
}
