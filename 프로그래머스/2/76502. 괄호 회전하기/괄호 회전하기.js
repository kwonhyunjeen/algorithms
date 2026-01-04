function solution(s) {
    let count = 0;
    const pairs = { ')': '(', ']': '[', '}': '{' };
    
    for (let i = 0; i < s.length; i++) {
        const rotated = s.slice(i) + s.slice(0, i);
        const stack = [];
        let valid = true;
        
        for (let char of rotated) {
            if (char === '(' || char === '[' || char === '{') {
                stack.push(char);
            } else {
                if (stack.length === 0 || stack.pop() !== pairs[char]) {
                    valid = false;
                    break;
                }
            }
        }
        
       if (valid && stack.length === 0) {
           count++;
       }
    }
 
    return count;
}
