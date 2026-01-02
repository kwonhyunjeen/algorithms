function solution(n, words) {
    const used = new Set();
    let turn = 1;
    
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const person = (i % n) + 1;
        
        if (i > 0 && i % n === 0) {
            turn++
        }
        
        
        if (used.has(word) || (i > 0 && words[i-1].at(-1) !== word[0])) {
            return [person, turn]
        }
        
        used.add(word);
    }
    
    return [0, 0]
}

/*
 탈락 조건
 1. 이전에 등장한 단어 다시 말하면 탈락
 2. 앞사람의 마지막 글자로 시작하지 않으면 탈락
 
 반환
 1. 가장 먼저 탈락하는 사람 번호, 그 사람이 자신의 몇 번째에 탈락하는지 반환
    (i % n) + 1            
 2. 탈락자가 생기지 않는다면 [0, 0] 반환
*/
