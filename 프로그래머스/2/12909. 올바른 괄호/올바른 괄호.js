function solution(s){
    /*
    카운터 사용 (for문)
    let count = 0;
    
    for (let char of s) {
        if (char === '(') {
            count ++
        } else {
            count --;
        }
        
        if (count < 0) {
            return false
        }
    }
    
    return count === 0
    */
    
    const stack = [];
    
    for (let char of s) {
        if (char === '(') {
            stack.push(char);
        } else {
            if (stack.length === 0) {
                return false
            }
            stack.pop()
        }
    }
    return stack.length === 0;
}