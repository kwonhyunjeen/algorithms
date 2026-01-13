function solution(maps) {
    const rows = maps.length;
    const cols = maps[0].length;
    
    // 도착 지점 (행렬에서는 x가 행, y가 열을 가리킴)
    const goal = { x: rows - 1, y: cols - 1 };
    
    // 방문 지도 (maps와 동일 크기)
    const visitedMaps = Array.from({ length: rows }, () => Array(cols).fill(false));
    
    // 큐 (시작 지점 등록 및 방문 처리)
    const queue = [
        { x: 0, y: 0, steps: 1 },
    ];
    visitedMaps[0][0] = true;
    
    // 탐색 시작
    while (queue.length > 0) {
        const current = queue.shift();
        
        // 도착
        if (current.x === goal.x && current.y === goal.y) {
            return current.steps;
        }
        
        // 상하좌우 탐색
        const nexts = [
            { x: current.x - 1, y: current.y }, // top
            { x: current.x, y: current.y + 1 }, // right
            { x: current.x + 1, y: current.y }, // bottom
            { x: current.x, y: current.y - 1 }, // left
        ];
        for (let i = 0; i < nexts.length; i += 1) {
            const next = nexts[i];
            
            // 지도 범위 & 벽 체크
            if (maps[next.x]?.[next.y] !== 1) continue;
            // 방문 여부 체크
            if (visitedMaps[next.x]?.[next.y]) continue;
            
            // 큐 등록 및 방문 처리
            queue.push({ x: next.x, y: next.y, steps: current.steps + 1 });
            visitedMaps[next.x][next.y] = true;
        }
    }
    
    // 도달 불가
    return -1;
}
