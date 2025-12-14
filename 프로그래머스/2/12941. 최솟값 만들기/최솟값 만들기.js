function solution(A,B){
    A.sort((a, b) => a - b); // 오름차순
    B.sort((a, b) => b - a); // 내림차순
    
    let result = 0;
    
    for (let i = 0; i < A.length; i++) {
        result += A[i] * B[i]    
    }
    
    return result;
    
    // return A.reduce((sum, a, i) => sum + a * B[i], 0)
    
}