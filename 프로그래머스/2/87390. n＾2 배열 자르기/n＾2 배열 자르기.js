function solution(n, left, right) {
   /*    
    (0, 0) 1 max(0, 0) + 1
    (0, 1) 2 max(0, 1) + 1
    (0, 2) 3 max(0, 2) + 1
    (1, 0) 2 max(1, 0) + 1
    (1, 1) 2 max(1, 1) + 1
    (1, 2) 3 max(1, 2) + 1
    (2, 0) 3 max(2, 0) + 1
    (2, 1) 3 max(2, 1) + 1
    (2, 2) 3 max(2, 1) + 1
    => max(row, col) + 1
    
    (0, 2), (1, 0), (1, 1), (1, 2)
                  .  .  .  .
    배열:   [1, 2, 3, 2, 2, 3, 3, 3, 3]
    index: [0, 1, 2, 3, 4, 5, 6, 7, 8]
            
    row = Math.floor(index / n) 0 
    col = index % n
   */
    const result = [];
    
    for (let idx = left; idx <= right; idx++) {
        const row = Math.floor(idx / n);
        const col = idx % n;
              
        const value = Math.max(row, col) + 1;
        result.push(value);
    }
    
    return result;
}

