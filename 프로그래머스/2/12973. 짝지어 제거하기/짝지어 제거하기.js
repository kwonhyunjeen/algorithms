function solution(s) {
    /*
     1. 스택이 비어있으면 → push
     2. 스택 top과 같으면 → pop (짝 제거!)
     3. 스택 top과 다르면 → push
    */
    const stack = [];

    for (char of s) {
        if (stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop(char)
        } else {
            stack.push(char)
        }
    }
    
    return stack.length === 0 ? 1 : 0;
}