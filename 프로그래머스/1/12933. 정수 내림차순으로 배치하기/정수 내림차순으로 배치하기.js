function solution(n) {
    return Number(Array.from(String(n)).sort((a, b) => b - a).join(''));
    /*
    Number(String(n)
        .split('')
        .sort((a, b) => b -a)
        .join(''))
    */
}