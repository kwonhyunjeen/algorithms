function solution(n) {
    // 1의 갯수
    const ones = (num) => num.toString(2).split(1).length - 1;
    
    // result는 n보다 큰 자연수
    let result = n + 1;
    
    while (ones(result) !== ones(n)) {
        result ++;
    }
    
    return result;
}