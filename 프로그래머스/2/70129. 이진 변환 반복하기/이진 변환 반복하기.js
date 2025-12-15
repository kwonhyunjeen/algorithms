function solution(s) {
    /*
    while (s !== "1") {
        - 0 개수 세기: 원본 길이 - 0 제거 후 길이
        - 0 제거: `replace(/0/g, '')`
        - 2진법 변환: `toString(2)`
        - 변환 횟수와 0 개수를 각각 카운팅
    }
    */
    let count = 0;
    let zeroCount = 0;
    
    while (s !== "1") {
        const removed = s.replace(/0/g, ''); // 111111
        zeroCount += s.length - removed.length; // 6
        
        s = removed.length.toString(2)
    
        count++;
    }
    
    return [count, zeroCount];
}