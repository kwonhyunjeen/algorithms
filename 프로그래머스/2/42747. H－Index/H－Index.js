function solution(citations) {
   /*
    5 -> 2
    4 -> 2
    3 -> 3
    2 -> 3
    1 -> 4
    즉, 최대 인용 횟수는 3!
    
    [6, 5, 3, 1, 0]
     ↑  ↑  ↑
     0  1  2
    
    인덱스 2를 보면 0, 1, 2 총 3편의 논문
    이 3편은 모두 citations[2] = 3번 이상 인용됨
    
    citations[0] = 6
    citations[1] = 5
    citations[2] = 3
    citations[3] = 1
    
    총 논문 수 5 = i + 1
    citations[i] >= i + 1
   */  
    
    citations.sort((a, b) => b - a);

    let h = 0;
    
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] >= i 
           + 1) {
            h++;
        }
    }
    
    return h;
}