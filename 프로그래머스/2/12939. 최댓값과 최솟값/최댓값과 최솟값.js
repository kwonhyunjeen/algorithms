function solution(s) {
    // 문자열 -> 배열
    // 배열 -> 최대값/최소값
    const numbers = s.split(' ').map(Number);
    return `${Math.min(...numbers)} ${Math.max(...numbers)}`
}