function solution(k, dungeons) {
    let result = 0;
    const visited = new Array(dungeons.length).fill(false);
    
    function dfs(energy, exploreNum) {
        
        result = Math.max(result, exploreNum);
        
        for (let i = 0; i < dungeons.length; i++) {
            if (!visited[i] && energy >= dungeons[i][0]) {
                visited[i] = true;
                dfs(energy - dungeons[i][1], exploreNum + 1);
                visited[i] = false;
            }
        }
    }
    
    dfs(k, 0);
    return result;
}