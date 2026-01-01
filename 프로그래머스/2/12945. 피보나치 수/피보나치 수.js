function solution(n) {
	if (n === 0) return 0
    if (n === 1) return 1
    
    let prev2 = 0; // F(n-2)
    let prev1 = 1; // F(n-1)
    
    for (let i = 2; i <= n; i++) {
        const current = (prev2 + prev1) % 1234567;
        prev2 = prev1;
        prev1 = current;
    }
    
    return prev1;
}