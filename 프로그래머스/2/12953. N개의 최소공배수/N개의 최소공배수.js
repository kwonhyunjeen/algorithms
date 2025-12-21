function solution(arr) {
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }
    
    function lcm(a, b) {
        return a * b / gcd(a, b)
    }
    
    return arr.reduce((acc, num) => lcm(acc, num));
}