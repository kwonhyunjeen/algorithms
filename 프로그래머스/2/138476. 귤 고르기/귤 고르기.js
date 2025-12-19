function solution(k, gyul) {
    /*
    1. 크기별 개수 구하기
    2. 가장 많은 순으로 정렬
    */
    
    const countMap = new Map();
    
    for (let size of gyul) {
        // 	Map(5) { 1 => 1, 3 => 2, 2 => 2, 5 => 2, 4 => 1 }
        countMap.set(size, (countMap.get(size) || 0) + 1);
    }
    
    // [ 2, 2, 2, 1, 1 ]
    const counts = [...countMap.values()].sort((a, b) => b - a)
    
    let total = 0;
    let types = 0;
    
    for (let count of counts) {
        total += count;
        types++;
        
        if (total >= k) {
            break;
        }
        
    }
    
    return types;
    
}