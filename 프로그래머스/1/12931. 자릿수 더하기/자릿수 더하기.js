function solution(n) {
    let answer = 0;
    
    for (let num of String(n)) {
        answer += Number(num)
    }
    
    // String(n).split('').forEach(i => {
    //     answer += Number(i);
    // });

    return answer;
}